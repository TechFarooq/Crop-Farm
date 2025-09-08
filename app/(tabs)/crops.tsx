import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { 
  Wheat, 
  Leaf, 
  Calendar, 
  TrendingUp, 
  Clock,
  Droplets,
  Sun
} from 'lucide-react-native';

export default function Crops() {
  const CropCard = ({ 
    name, 
    season, 
    difficulty, 
    growthTime, 
    suitability, 
    waterNeeds,
    sunlight,
    marketPrice 
  }: {
    name: string;
    season: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    growthTime: string;
    suitability: number;
    waterNeeds: 'Low' | 'Medium' | 'High';
    sunlight: 'Low' | 'Medium' | 'High';
    marketPrice: string;
  }) => {
    const suitabilityColor = suitability >= 80 ? '#228B22' : suitability >= 60 ? '#DAA520' : '#DC143C';
    const difficultyColor = difficulty === 'Easy' ? '#228B22' : difficulty === 'Medium' ? '#DAA520' : '#DC143C';

    return (
      <TouchableOpacity style={styles.cropCard}>
        <View style={styles.cropHeader}>
          <View style={styles.cropInfo}>
            <Text style={styles.cropName}>{name}</Text>
            <Text style={styles.cropSeason}>{season} Season</Text>
          </View>
          <View style={[styles.suitabilityBadge, { backgroundColor: suitabilityColor }]}>
            <Text style={styles.suitabilityText}>{suitability}%</Text>
          </View>
        </View>

        <View style={styles.cropDetails}>
          <View style={styles.detailRow}>
            <View style={styles.detailItem}>
              <Clock size={16} color="#666" />
              <Text style={styles.detailText}>{growthTime}</Text>
            </View>
            <View style={[styles.difficultyBadge, { backgroundColor: difficultyColor }]}>
              <Text style={styles.difficultyText}>{difficulty}</Text>
            </View>
          </View>

          <View style={styles.requirementsRow}>
            <View style={styles.requirement}>
              <Droplets size={14} color="#4682B4" />
              <Text style={styles.requirementText}>{waterNeeds} Water</Text>
            </View>
            <View style={styles.requirement}>
              <Sun size={14} color="#DAA520" />
              <Text style={styles.requirementText}>{sunlight} Sun</Text>
            </View>
            <View style={styles.requirement}>
              <TrendingUp size={14} color="#228B22" />
              <Text style={styles.requirementText}>{marketPrice}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Crop Suggestions</Text>
        <Text style={styles.headerSubtitle}>Based on your soil & weather data</Text>
      </View>

      <View style={styles.currentConditions}>
        <Text style={styles.sectionTitle}>Current Farm Conditions</Text>
        <View style={styles.conditionsRow}>
          <View style={styles.conditionItem}>
            <Droplets size={18} color="#4682B4" />
            <Text style={styles.conditionLabel}>Soil Moisture</Text>
            <Text style={styles.conditionValue}>65%</Text>
          </View>
          <View style={styles.conditionItem}>
            <Sun size={18} color="#DAA520" />
            <Text style={styles.conditionLabel}>Temperature</Text>
            <Text style={styles.conditionValue}>28°C</Text>
          </View>
          <View style={styles.conditionItem}>
            <Leaf size={18} color="#228B22" />
            <Text style={styles.conditionLabel}>Season</Text>
            <Text style={styles.conditionValue}>Spring</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌟 Highly Recommended</Text>
        
        <CropCard
          name="Tomatoes"
          season="Spring"
          difficulty="Easy"
          growthTime="75-85 days"
          suitability={95}
          waterNeeds="Medium"
          sunlight="High"
          marketPrice="₹45/kg"
        />

        <CropCard
          name="Bell Peppers"
          season="Spring"
          difficulty="Medium"
          growthTime="70-80 days"
          suitability={88}
          waterNeeds="Medium"
          sunlight="High"
          marketPrice="₹60/kg"
        />

        <CropCard
          name="Lettuce"
          season="Spring"
          difficulty="Easy"
          growthTime="45-55 days"
          suitability="85"
          waterNeeds="High"
          sunlight="Medium"
          marketPrice="₹80/kg"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✅ Good Options</Text>
        
        <CropCard
          name="Carrots"
          season="Spring"
          difficulty="Medium"
          growthTime="70-80 days"
          suitability={75}
          waterNeeds="Medium"
          sunlight="Medium"
          marketPrice="₹35/kg"
        />

        <CropCard
          name="Spinach"
          season="Spring"
          difficulty="Easy"
          growthTime="40-50 days"
          suitability={70}
          waterNeeds="High"
          sunlight="Medium"
          marketPrice="₹40/kg"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⚠️ Consider Later</Text>
        
        <CropCard
          name="Eggplant"
          season="Summer"
          difficulty="Hard"
          growthTime="100-120 days"
          suitability={45}
          waterNeeds="High"
          sunlight="High"
          marketPrice="₹30/kg"
        />
      </View>

      <View style={styles.tips}>
        <Text style={styles.sectionTitle}>💡 Planting Tips</Text>
        <View style={styles.tipItem}>
          <Text style={styles.tipText}>🌱 Start with easy crops like tomatoes and lettuce for best results</Text>
        </View>
        <View style={styles.tipItem}>
          <Text style={styles.tipText}>💧 Your current soil moisture is perfect for most spring vegetables</Text>
        </View>
        <View style={styles.tipItem}>
          <Text style={styles.tipText}>🌡️ Plant heat-loving crops like peppers after soil warms up more</Text>
        </View>
        <View style={styles.tipItem}>
          <Text style={styles.tipText}>📅 Best planting window: Next 2-3 weeks for spring crops</Text>
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
  currentConditions: {
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
  conditionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  conditionItem: {
    alignItems: 'center',
    flex: 1,
  },
  conditionLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  conditionValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#228B22',
    marginTop: 2,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  cropCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cropHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  cropInfo: {
    flex: 1,
  },
  cropName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cropSeason: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  suitabilityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  suitabilityText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cropDetails: {
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  requirementsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  requirement: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  requirementText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  tips: {
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
  tipItem: {
    backgroundColor: '#F0FFF0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#228B22',
  },
  tipText: {
    fontSize: 14,
    color: '#2F4F2F',
  },
});