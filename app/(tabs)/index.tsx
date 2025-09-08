import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { 
  Droplets, 
  Sun, 
  Wheat, 
  Camera, 
  TrendingUp,
  Wifi,
  WifiOff
} from 'lucide-react-native';

export default function Dashboard() {
  const StatusCard = ({ 
    title, 
    value, 
    status, 
    icon, 
    onPress 
  }: {
    title: string;
    value: string;
    status: 'good' | 'warning' | 'critical';
    icon: React.ReactNode;
    onPress: () => void;
  }) => {
    const statusColors = {
      good: '#228B22',
      warning: '#DAA520',
      critical: '#DC143C'
    };

    return (
      <TouchableOpacity style={[styles.card, { borderLeftColor: statusColors[status] }]} onPress={onPress}>
        <View style={styles.cardHeader}>
          {icon}
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <Text style={styles.cardValue}>{value}</Text>
        <View style={[styles.statusIndicator, { backgroundColor: statusColors[status] }]}>
          <Text style={styles.statusText}>{status.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.greeting}>Good Morning, Farmer</Text>
          <Text style={styles.date}>Today • March 15, 2025</Text>
        </View>
        <View style={styles.offlineIndicator}>
          <WifiOff size={16} color="#228B22" />
          <Text style={styles.offlineText}>Offline Mode</Text>
        </View>
      </View>

      <View style={styles.quickStats}>
        <Text style={styles.sectionTitle}>Farm Overview</Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>85%</Text>
            <Text style={styles.statLabel}>Soil Health</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>24°C</Text>
            <Text style={styles.statLabel}>Temperature</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Alerts</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        
        <StatusCard
          title="Soil Health"
          value="Moisture: 65% • pH: 6.8"
          status="good"
          icon={<Droplets size={24} color="#228B22" />}
          onPress={() => router.push('/soil-weather')}
        />

        <StatusCard
          title="Weather Forecast"
          value="Sunny • 28°C • Light Rain Tonight"
          status="warning"
          icon={<Sun size={24} color="#DAA520" />}
          onPress={() => router.push('/soil-weather')}
        />

        <StatusCard
          title="Crop Suggestions"
          value="Tomatoes, Peppers recommended"
          status="good"
          icon={<Wheat size={24} color="#228B22" />}
          onPress={() => router.push('/crops')}
        />

        <StatusCard
          title="Disease Detection"
          value="Scan your crops for issues"
          status="warning"
          icon={<Camera size={24} color="#DAA520" />}
          onPress={() => router.push('/disease')}
        />

        <StatusCard
          title="Market Prices"
          value="Tomatoes: ₹45/kg • Updated 2h ago"
          status="good"
          icon={<TrendingUp size={24} color="#228B22" />}
          onPress={() => router.push('/market')}
        />
      </View>

      <View style={styles.alerts}>
        <Text style={styles.sectionTitle}>Today's Alerts</Text>
        <View style={styles.alertItem}>
          <Text style={styles.alertText}>🌧️ Light rain expected tonight - ideal for watering</Text>
        </View>
        <View style={styles.alertItem}>
          <Text style={styles.alertText}>🌱 Best time to plant summer crops this week</Text>
        </View>
        <View style={styles.alertItem}>
          <Text style={styles.alertText}>⚠️ Aphid season - check tomato plants regularly</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    flex: 1,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: '#E0E0E0',
  },
  offlineIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  offlineText: {
    fontSize: 12,
    color: '#228B22',
    fontWeight: '600',
    marginLeft: 4,
  },
  quickStats: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 12,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#228B22',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  section: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginLeft: 8,
  },
  cardValue: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  statusIndicator: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  alerts: {
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
  alertItem: {
    backgroundColor: '#FFF8DC',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#DAA520',
  },
  alertText: {
    fontSize: 14,
    color: '#8B4513',
  },
});