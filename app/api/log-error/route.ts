import { NextRequest, NextResponse } from "next/server";

interface ErrorLogData {
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: string;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string;
}

// Rate limiting para prevenir spam de logs
const logRateLimit = new Map<string, { count: number; timestamp: number }>();
const MAX_LOGS_PER_MINUTE = 10;
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minuto

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const userLimit = logRateLimit.get(ip);

  if (!userLimit) {
    logRateLimit.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - userLimit.timestamp > RATE_LIMIT_WINDOW) {
    logRateLimit.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (userLimit.count >= MAX_LOGS_PER_MINUTE) {
    return true;
  }

  userLimit.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Verificar rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many error logs" },
        { status: 429 }
      );
    }

    const errorData: ErrorLogData = await request.json();

    // Validar datos requeridos
    if (!errorData.message || !errorData.timestamp) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Crear log estructurado
    const logEntry = {
      level: "error",
      timestamp: errorData.timestamp,
      message: errorData.message,
      stack: errorData.stack,
      componentStack: errorData.componentStack,
      userAgent: errorData.userAgent,
      url: errorData.url,
      ip,
      environment: process.env.NODE_ENV,
      version: process.env.npm_package_version || "unknown",
    };

    // Log al servidor (console para desarrollo, servicio externo para producción)
    if (process.env.NODE_ENV === "production") {
      // En producción, enviar a servicio de logging como Sentry, LogRocket, etc.
      console.error("CLIENT_ERROR:", JSON.stringify(logEntry, null, 2));

      // Aquí integrarías con tu servicio de logging preferido:
      // await sendToSentry(logEntry);
      // await sendToLogRocket(logEntry);
      // await sendToCloudWatch(logEntry);
    } else {
      // En desarrollo, solo log a consola
      console.error("CLIENT_ERROR:", logEntry);
    }

    // También podrías almacenar en base de datos para análisis posterior
    // await saveErrorToDatabase(logEntry);

    return NextResponse.json({ success: true, logged: true }, { status: 200 });
  } catch (error) {
    console.error("Error in log-error endpoint:", error);

    return NextResponse.json({ error: "Failed to log error" }, { status: 500 });
  }
}

// Manejar métodos no permitidos
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
