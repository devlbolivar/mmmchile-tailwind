# Guía para Consumir API desde Aplicación Móvil

## 📱 Endpoints Disponibles

| Endpoint            | Descripción                     | URL                     |
| ------------------- | ------------------------------- | ----------------------- |
| `/api`              | Información general de la API   | `GET /api`              |
| `/api/general-info` | Información general de la radio | `GET /api/general-info` |
| `/api/programa`     | Programación de la radio        | `GET /api/programa`     |
| `/api/bible-verses` | Versículos bíblicos             | `GET /api/bible-verses` |

## 🌐 URL Base

- **Desarrollo**: `http://localhost:3000`
- **Producción**: `https://mmmchile.cl` (cuando esté desplegado)

## 📋 Estructura de Respuestas

### 1. Información General (`/api/general-info`)

```json
{
  "url": "https://s38.radiolize.com/radio/8040/radio.mp3",
  "wspLink": "https://wa.me/+56928026410/?text=Hola Radio Bethel Chile",
  "webLink": "https://mmmchile.cl/radio",
  "facebookLink": "https://web.facebook.com/profile.php?id=61559256342757",
  "instagramLink": "",
  "horario": [
    {
      "dia": "Lunes",
      "hora": "19:30",
      "culto": "Caballeros"
    }
  ],
  "sobre_nosotros": "Texto descriptivo..."
}
```

### 2. Programación (`/api/programa`)

```json
{
  "programacion": [
    {
      "dia": "Lunes",
      "titulo": "Programación de Lunes",
      "programas": [
        {
          "hora": "03H /08H CL",
          "nombre": "Mensaje a la Conciencia"
        }
      ]
    }
  ]
}
```

### 3. Versículos Bíblicos (`/api/bible-verses`)

```json
[
  {
    "book": "Salmos",
    "chapter": "37",
    "verse": "4",
    "text": "Deléitate asimismo en Jehová..."
  }
]
```

## 🚀 Implementación por Plataforma

### Android (Kotlin/Java)

#### Usando Retrofit

```kotlin
// Modelos de datos
data class GeneralInfo(
    val url: String,
    val wspLink: String,
    val webLink: String,
    val facebookLink: String,
    val instagramLink: String,
    val horario: List<Horario>,
    val sobre_nosotros: String
)

data class Horario(
    val dia: String,
    val hora: String,
    val culto: String
)

// Interfaz de API
interface RadioApiService {
    @GET("api/general-info")
    suspend fun getGeneralInfo(): GeneralInfo

    @GET("api/programa")
    suspend fun getPrograma(): ProgramaResponse

    @GET("api/bible-verses")
    suspend fun getBibleVerses(): List<BibleVerse>
}

// Uso en ViewModel
class RadioViewModel : ViewModel() {
    private val apiService = RetrofitClient.create(RadioApiService::class.java)

    fun loadGeneralInfo() {
        viewModelScope.launch {
            try {
                val info = apiService.getGeneralInfo()
                // Actualizar UI
            } catch (e: Exception) {
                // Manejar error
            }
        }
    }
}
```

#### Usando Volley

```java
String url = "https://mmmchile.cl/api/general-info";

JsonObjectRequest request = new JsonObjectRequest(
    Request.Method.GET, url, null,
    response -> {
        try {
            String radioUrl = response.getString("url");
            String wspLink = response.getString("wspLink");
            // Procesar respuesta
        } catch (JSONException e) {
            e.printStackTrace();
        }
    },
    error -> {
        // Manejar error
    }
);

RequestQueue queue = Volley.newRequestQueue(this);
queue.add(request);
```

### iOS (Swift)

#### Usando URLSession

```swift
// Modelos de datos
struct GeneralInfo: Codable {
    let url: String
    let wspLink: String
    let webLink: String
    let facebookLink: String
    let instagramLink: String
    let horario: [Horario]
    let sobre_nosotros: String
}

struct Horario: Codable {
    let dia: String
    let hora: String
    let culto: String
}

// Servicio de API
class RadioApiService {
    private let baseURL = "https://mmmchile.cl"

    func fetchGeneralInfo() async throws -> GeneralInfo {
        guard let url = URL(string: "\(baseURL)/api/general-info") else {
            throw APIError.invalidURL
        }

        let (data, _) = try await URLSession.shared.data(from: url)
        return try JSONDecoder().decode(GeneralInfo.self, from: data)
    }
}

// Uso en ViewModel
@MainActor
class RadioViewModel: ObservableObject {
    @Published var generalInfo: GeneralInfo?
    @Published var isLoading = false

    private let apiService = RadioApiService()

    func loadGeneralInfo() {
        isLoading = true
        Task {
            do {
                generalInfo = try await apiService.fetchGeneralInfo()
            } catch {
                print("Error: \(error)")
            }
            isLoading = false
        }
    }
}
```

### React Native

#### Usando Fetch

```javascript
// Servicio de API
class RadioApiService {
  constructor() {
    this.baseURL = "https://mmmchile.cl";
  }

  async getGeneralInfo() {
    try {
      const response = await fetch(`${this.baseURL}/api/general-info`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching general info:", error);
      throw error;
    }
  }

  async getPrograma() {
    try {
      const response = await fetch(`${this.baseURL}/api/programa`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching programa:", error);
      throw error;
    }
  }

  async getBibleVerses() {
    try {
      const response = await fetch(`${this.baseURL}/api/bible-verses`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching bible verses:", error);
      throw error;
    }
  }
}

// Uso en componente
import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";

const RadioScreen = () => {
  const [generalInfo, setGeneralInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiService = new RadioApiService();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const info = await apiService.getGeneralInfo();
      setGeneralInfo(info);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      <Text>Radio URL: {generalInfo?.url}</Text>
      <Text>WhatsApp: {generalInfo?.wspLink}</Text>
    </View>
  );
};
```

#### Usando Axios

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: "https://mmmchile.cl",
  timeout: 10000,
});

// Interceptores para manejo de errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

// Uso
const fetchGeneralInfo = async () => {
  try {
    const response = await api.get("/api/general-info");
    return response.data;
  } catch (error) {
    throw error;
  }
};
```

### Flutter (Dart)

```dart
// Modelos de datos
class GeneralInfo {
  final String url;
  final String wspLink;
  final String webLink;
  final String facebookLink;
  final String instagramLink;
  final List<Horario> horario;
  final String sobreNosotros;

  GeneralInfo({
    required this.url,
    required this.wspLink,
    required this.webLink,
    required this.facebookLink,
    required this.instagramLink,
    required this.horario,
    required this.sobreNosotros,
  });

  factory GeneralInfo.fromJson(Map<String, dynamic> json) {
    return GeneralInfo(
      url: json['url'],
      wspLink: json['wspLink'],
      webLink: json['webLink'],
      facebookLink: json['facebookLink'],
      instagramLink: json['instagramLink'],
      horario: (json['horario'] as List)
          .map((h) => Horario.fromJson(h))
          .toList(),
      sobreNosotros: json['sobre_nosotros'],
    );
  }
}

// Servicio de API
class RadioApiService {
  static const String baseURL = 'https://mmmchile.cl';

  Future<GeneralInfo> getGeneralInfo() async {
    final response = await http.get(
      Uri.parse('$baseURL/api/general-info'),
      headers: {'Content-Type': 'application/json'},
    );

    if (response.statusCode == 200) {
      return GeneralInfo.fromJson(json.decode(response.body));
    } else {
      throw Exception('Failed to load general info');
    }
  }
}

// Uso en Widget
class RadioScreen extends StatefulWidget {
  @override
  _RadioScreenState createState() => _RadioScreenState();
}

class _RadioScreenState extends State<RadioScreen> {
  GeneralInfo? generalInfo;
  bool isLoading = true;

  @override
  void initState() {
    super.initState();
    loadData();
  }

  Future<void> loadData() async {
    try {
      final info = await RadioApiService().getGeneralInfo();
      setState(() {
        generalInfo = info;
        isLoading = false;
      });
    } catch (e) {
      setState(() {
        isLoading = false;
      });
      // Mostrar error
    }
  }

  @override
  Widget build(BuildContext context) {
    if (isLoading) {
      return CircularProgressIndicator();
    }

    return Scaffold(
      body: Column(
        children: [
          Text('Radio URL: ${generalInfo?.url}'),
          Text('WhatsApp: ${generalInfo?.wspLink}'),
        ],
      ),
    );
  }
}
```

## 🔧 Configuraciones Importantes

### 1. Permisos de Red

#### Android (AndroidManifest.xml)

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

#### iOS (Info.plist)

```xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
</dict>
```

### 2. Manejo de Errores

```javascript
// Ejemplo de manejo de errores
const handleApiError = (error) => {
  if (error.response) {
    // Error del servidor
    console.error("Server Error:", error.response.status);
  } else if (error.request) {
    // Error de red
    console.error("Network Error:", error.request);
  } else {
    // Otro error
    console.error("Error:", error.message);
  }
};
```

### 3. Cache y Offline

```javascript
// Ejemplo de cache simple
class CachedApiService {
  constructor() {
    this.cache = new Map();
    this.cacheTimeout = 5 * 60 * 1000; // 5 minutos
  }

  async getGeneralInfo() {
    const cacheKey = "general-info";
    const cached = this.cache.get(cacheKey);

    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }

    const data = await fetch(`${this.baseURL}/api/general-info`).then((r) =>
      r.json()
    );
    this.cache.set(cacheKey, {
      data,
      timestamp: Date.now(),
    });

    return data;
  }
}
```

## 📱 Ejemplo de Uso Completo

### Reproducir Radio

```javascript
// Usar la URL de la radio para reproducción
const playRadio = async () => {
  try {
    const info = await apiService.getGeneralInfo();
    // Usar info.url para reproducir el stream de radio
    audioPlayer.play(info.url);
  } catch (error) {
    console.error("Error playing radio:", error);
  }
};
```

### Abrir WhatsApp

```javascript
// Abrir WhatsApp con mensaje predefinido
const openWhatsApp = async () => {
  try {
    const info = await apiService.getGeneralInfo();
    Linking.openURL(info.wspLink);
  } catch (error) {
    console.error("Error opening WhatsApp:", error);
  }
};
```

## 🚀 Próximos Pasos

1. **Implementar autenticación** si se requiere
2. **Agregar cache persistente** para funcionamiento offline
3. **Implementar notificaciones push** para eventos importantes
4. **Agregar métricas y analytics** para monitoreo
5. **Optimizar para diferentes tamaños de pantalla**

¡La API está lista para ser consumida desde cualquier aplicación móvil!
