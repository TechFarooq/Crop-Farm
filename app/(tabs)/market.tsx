import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  MapPin,
  Wheat,
  Apple,
  Carrot,
  Leaf
} from 'lucide-react-native';

export default function Market() {
  const PriceCard = ({ 
    crop, 
    currentPrice, 
    previousPrice, 
    change, 
    location, 
    lastUpdated,
    icon,
    unit = 'kg'
  }: {
    crop: string;
    currentPrice: number;
    previousPrice: number;
    change: number;
    location: string;
    lastUpdated: string;
    icon: React.ReactNode;
    unit?: string;
  }) => {
    const isPositive = change > 0;
    const changeColor = isPositive ? '#228B22' : '#DC143C';
    const TrendIcon = isPositive ? TrendingUp : TrendingDown;

    return (
      <TouchableOpacity style={styles.priceCard}>
        <View style={styles.priceHeader}>
          <View style={styles.cropInfo}>
            {icon}
            <Text style={styles.cropName}>{crop}</Text>
          </View>
          <View style={styles.priceChange}>
            <TrendIcon size={16} color={changeColor} />
            <Text style={[styles.changeText, { color: changeColor }]}>
              {isPositive ? '+' : ''}{change}%
            </Text>
          </View>
        </View>

        <View style={styles.priceDetails}>
          <View style={styles.currentPrice}>
            <Text style={styles.priceValue}>₹{currentPrice}</Text>
            <Text style={styles.priceUnit}>per {unit}</Text>
          </View>
          <Text style={styles.previousPrice}>
            Previous: ₹{previousPrice}/{unit}
          </Text>
        </View>

        <View style={styles.priceFooter}>
          <View style={styles.locationInfo}>
            <MapPin size={12} color="#666" />
            <Text style={styles.locationText}>{location}</Text>
          </View>
          <View style={styles.timeInfo}>
            <Clock size={12} color="#666" />
            <Text style={styles.timeText}>{lastUpdated}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const MarketInsight = ({ 
    title, 
    description, 
    type 
  }: {
    title: string;
    description: string;
    type: 'positive' | 'neutral' | 'negative';
  }) => {
    const typeColors = {
      positive: '#228B22',
      neutral: '#DAA520',
      negative: '#DC143C'
    };

    const typeEmojis = {
      positive: '📈',
      neutral: '📊',
      negative: '📉'
    };

    return (
      <View style={[styles.insightCard, { borderLeftColor: typeColors[type] }]}>
        <Text style={styles.insightTitle}>
          {typeEmojis[type]} {title}
        </Text>
        <Text style={styles.insightDescription}>{description}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Market Prices</Text>
        <Text style={styles.headerSubtitle}>Cached local market data</Text>
      </View>

      <View style={styles.lastUpdate}>
        <Text style={styles.updateText}>Last synced: 2 hours ago</Text>
        <View style={styles.offlineBadge}>
          <Text style={styles.offlineText}>OFFLINE DATA</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🥬 Your Crops</Text>
        
        <PriceCard
          crop="Tomatoes"
          currentPrice={45}
          previousPrice={42}
          change={7.1}
          location="Local Market"
          lastUpdated="2h ago"
          icon={<Apple size={20} color="#DC143C" />}
        />

        <PriceCard
          crop="Bell Peppers"
          currentPrice={60}
          previousPrice={58}
          change={3.4}
          location="Local Market"
          lastUpdated="2h ago"
          icon={<Carrot size={20} color="#DAA520" />}
        />

        <PriceCard
          crop="Lettuce"
          currentPrice={80}
          previousPrice={85}
          change={-5.9}
          location="Local Market"
          lastUpdated="2h ago"
          icon={<Leaf size={20} color="#228B22" />}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📊 Regional Prices</Text>
        
        <PriceCard
          crop="Wheat"
          currentPrice={2150}
          previousPrice={2100}
          change={2.4}
          location="Regional Hub"
          lastUpdated="4h ago"
          unit="quintal"
          icon={<Wheat size={20} color="#DAA520" />}
        />

        <PriceCard
          crop="Onions"
          currentPrice={25}
          previousPrice={28}
          change={-10.7}
          location="Regional Hub"
          lastUpdated="4h ago"
          icon={<Carrot size={20} color="#8B4513" />}
        />

        <PriceCard
          crop="Potatoes"
          currentPrice={18}
          previousPrice={16}
          change={12.5}
          location="Regional Hub"
          lastUpdated="4h ago"
          icon={<Carrot size={20} color="#D2691E" />}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💡 Market Insights</Text>
        
        <MarketInsight
          title="Tomato Prices Rising"
          description="Local demand high due to festival season. Good time to sell if harvest is ready."
          type="positive"
        />

        <MarketInsight
          title="Lettuce Prices Declining"
          description="Oversupply in regional markets. Consider holding harvest for 1-2 weeks."
          type="negative"
        />

        <MarketInsight
          title="Pepper Market Stable"
          description="Consistent demand with steady prices. Safe crop for regular income."
          type="neutral"
        />
      </View>

      <View style={styles.bestTime}>
        <Text style={styles.sectionTitle}>⏰ Best Selling Times</Text>
        <View style={styles.timeSlots}>
          <View style={styles.timeSlot}>
            <Text style={styles.timeLabel}>Morning</Text>
            <Text style={styles.timeDescription}>6-9 AM</Text>
            <Text style={styles.timeNote}>Highest demand</Text>
          </View>
          <View style={styles.timeSlot}>
            <Text style={styles.timeLabel}>Evening</Text>
            <Text style={styles.timeDescription}>4-6 PM</Text>
            <Text style={styles.timeNote}>Good prices</Text>
          </View>
          <View style={styles.timeSlot}>
            <Text style={styles.timeLabel}>Weekend</Text>
            <Text style={styles.timeDescription}>Sat-Sun</Text>
            <Text style={styles.timeNote}>Premium rates</Text>
          </View>
        </View>
      </View>

      <View style={styles.offlineInfo}>
        <Text style={styles.offlineInfoTitle}>📱 Offline Mode</Text>
        <Text style={styles.offlineInfoText}>
          Market data is cached locally and updates when internet is available. 
          All prices shown are from the last successful sync.
        </Text>
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
  lastUpdate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF8DC',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  updateText: {
    fontSize: 14,
    color: '#8B4513',
  },
  offlineBadge: {
    backgroundColor: '#DAA520',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  offlineText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 16,
    marginTop: 16,
  },
  priceCard: {
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
  priceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cropInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  cropName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 8,
  },
  priceChange: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  priceDetails: {
    marginBottom: 12,
  },
  currentPrice: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  priceValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#228B22',
  },
  priceUnit: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  previousPrice: {
    fontSize: 12,
    color: '#666',
  },
  priceFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 8,
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  timeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  insightCard: {
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
  insightTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  insightDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  bestTime: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  timeSlots: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeSlot: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    flex: 0.3,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  timeLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  timeDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#228B22',
    marginBottom: 4,
  },
  timeNote: {
    fontSize: 11,
    color: '#666',
    textAlign: 'center',
  },
  offlineInfo: {
    margin: 16,
    backgroundColor: '#E8F5E8',
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#228B22',
  },
  offlineInfoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F4F2F',
    marginBottom: 8,
  },
  offlineInfoText: {
    fontSize: 14,
    color: '#2F4F2F',
    lineHeight: 20,
  },
});