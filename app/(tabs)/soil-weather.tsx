import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Droplets, Thermometer, Wind, Sun, Cloud, Zap, Leaf, ChartBar as BarChart3 } from 'lucide-react-native';

export default function SoilWeather() {
  const MetricCard = ({ 
    icon, 
    title, 
    value, 
    unit, 
    status, 
    description 
  }: {
    icon: React.ReactNode;
    title: string;
    value: string;
    unit: string;
    status: 'good' | 'warning' | 'critical';
    description: string;
  }) => {
    const statusColors = {
      good: '#228B22',
      warning: '#DAA520',
      critical: '#DC143C'
    };

    return (
      <View style={[styles.metricCard, { borderTopColor: statusColors[status] }]}>
        <View style={styles.metricHeader}>
          {icon}
          <Text style={styles.metricTitle}>{title}</Text>
        </View>
        <View style={styles.metricValue}>
          <Text style={styles.valueNumber}>{value}</Text>
          <Text style={styles.valueUnit}>{unit}</Text>
        </View>
        <Text style={styles.metricDescription}>{description}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Soil & Weather Insights</Text>
        <Text style={styles.headerSubtitle}>Last updated: 2 hours ago</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌱 Soil Health</Text>
        <View style={styles.metricsRow}>
          <MetricCard
            icon={<Droplets size={20} color="#228B22" />}
            title="Moisture"
            value="65"
            unit="%"
            status="good"
            description="Optimal for most crops"
          />
          <MetricCard
            icon={<Zap size={20} color="#DAA520" />}
            title="pH Level"
            value="6.8"
            unit=""
            status="warning"
            description="Slightly acidic"
          />
        </View>
        
        <View style={styles.metricsRow}>
          <MetricCard
            icon={<Leaf size={20} color="#228B22" />}
            title="Nitrogen"
            value="82"
            unit="ppm"
            status="good"
            description="Rich in nutrients"
          />
          <MetricCard
            icon={<BarChart3 size={20} color="#228B22" />}
            title="Organic Matter"
            value="4.2"
            unit="%"
            status="good"
            description="Excellent soil health"
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌤️ Weather Forecast</Text>
        
        <View style={styles.currentWeather}>
          <View style={styles.weatherMain}>
            <Sun size={48} color="#DAA520" />
            <View style={styles.weatherInfo}>
              <Text style={styles.temperature}>28°C</Text>
              <Text style={styles.weatherDescription}>Partly Cloudy</Text>
            </View>
          </View>
          <View style={styles.weatherDetails}>
            <View style={styles.weatherItem}>
              <Wind size={16} color="#666" />
              <Text style={styles.weatherText}>12 km/h</Text>
            </View>
            <View style={styles.weatherItem}>
              <Droplets size={16} color="#666" />
              <Text style={styles.weatherText}>45%</Text>
            </View>
          </View>
        </View>

        <View style={styles.forecast}>
          <Text style={styles.forecastTitle}>3-Day Forecast</Text>
          <View style={styles.forecastItems}>
            <View style={styles.forecastItem}>
              <Text style={styles.forecastDay}>Today</Text>
              <Sun size={24} color="#DAA520" />
              <Text style={styles.forecastTemp}>28°/18°</Text>
            </View>
            <View style={styles.forecastItem}>
              <Text style={styles.forecastDay}>Tomorrow</Text>
              <Cloud size={24} color="#666" />
              <Text style={styles.forecastTemp}>26°/16°</Text>
            </View>
            <View style={styles.forecastItem}>
              <Text style={styles.forecastDay}>Day 3</Text>
              <Droplets size={24} color="#4682B4" />
              <Text style={styles.forecastTemp}>24°/14°</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.recommendations}>
        <Text style={styles.sectionTitle}>💡 Recommendations</Text>
        <View style={styles.recommendationItem}>
          <Text style={styles.recommendationText}>
            ✅ Soil moisture is perfect for planting tomatoes and peppers
          </Text>
        </View>
        <View style={styles.recommendationItem}>
          <Text style={styles.recommendationText}>
            ⚠️ Consider adding lime to reduce soil acidity (pH 6.8)
          </Text>
        </View>
        <View style={styles.recommendationItem}>
          <Text style={styles.recommendationText}>
            🌧️ Light rain expected tomorrow - good for seedling growth
          </Text>
        </View>
        <View style={styles.recommendationItem}>
          <Text style={styles.recommendationText}>
            🌡️ Temperatures ideal for spring vegetable planting
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
  },
  header: {
    backgroundColor: '#228B22',
    padding: 20,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#E0E0E0',
    marginTop: 4,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 16,
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  metricCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    flex: 0.48,
    borderTopWidth: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  metricHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  metricTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginLeft: 8,
  },
  metricValue: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  valueNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#228B22',
  },
  valueUnit: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  metricDescription: {
    fontSize: 12,
    color: '#666',
  },
  currentWeather: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  weatherMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  weatherInfo: {
    marginLeft: 16,
  },
  temperature: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  weatherDescription: {
    fontSize: 16,
    color: '#666',
  },
  weatherDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weatherItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  forecast: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  forecastTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  forecastItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  forecastItem: {
    alignItems: 'center',
  },
  forecastDay: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  forecastTemp: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
  },
  recommendations: {
    margin: 16,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  recommendationItem: {
    backgroundColor: '#F0FFF0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#228B22',
  },
  recommendationText: {
    fontSize: 14,
    color: '#2F4F2F',
  },
});