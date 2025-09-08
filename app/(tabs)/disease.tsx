import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Camera, Upload, Scan, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Clock, Leaf, Bug, Droplets } from 'lucide-react-native';

export default function DiseaseDetection() {
  const handleCameraPress = () => {
    Alert.alert(
      'Camera Feature',
      'In a real app, this would open the camera to scan crop leaves for diseases.',
      [{ text: 'OK' }]
    );
  };

  const handleUploadPress = () => {
    Alert.alert(
      'Upload Feature',
      'In a real app, this would allow uploading photos from gallery for analysis.',
      [{ text: 'OK' }]
    );
  };

  const RecentScan = ({ 
    cropType, 
    result, 
    confidence, 
    date, 
    status 
  }: {
    cropType: string;
    result: string;
    confidence: number;
    date: string;
    status: 'healthy' | 'warning' | 'critical';
  }) => {
    const statusIcons = {
      healthy: <CheckCircle size={20} color="#228B22" />,
      warning: <AlertTriangle size={20} color="#DAA520" />,
      critical: <AlertTriangle size={20} color="#DC143C" />
    };

    const statusColors = {
      healthy: '#228B22',
      warning: '#DAA520',
      critical: '#DC143C'
    };

    return (
      <TouchableOpacity style={[styles.scanCard, { borderLeftColor: statusColors[status] }]}>
        <View style={styles.scanHeader}>
          <View style={styles.scanInfo}>
            <Text style={styles.scanCrop}>{cropType}</Text>
            <Text style={styles.scanDate}>{date}</Text>
          </View>
          {statusIcons[status]}
        </View>
        <Text style={styles.scanResult}>{result}</Text>
        <Text style={styles.scanConfidence}>Confidence: {confidence}%</Text>
      </TouchableOpacity>
    );
  };

  const TreatmentCard = ({ 
    disease, 
    treatment, 
    urgency 
  }: {
    disease: string;
    treatment: string;
    urgency: 'low' | 'medium' | 'high';
  }) => {
    const urgencyColors = {
      low: '#228B22',
      medium: '#DAA520',
      high: '#DC143C'
    };

    return (
      <View style={styles.treatmentCard}>
        <View style={styles.treatmentHeader}>
          <Text style={styles.treatmentDisease}>{disease}</Text>
          <View style={[styles.urgencyBadge, { backgroundColor: urgencyColors[urgency] }]}>
            <Text style={styles.urgencyText}>{urgency.toUpperCase()}</Text>
          </View>
        </View>
        <Text style={styles.treatmentText}>{treatment}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Disease Detection</Text>
        <Text style={styles.headerSubtitle}>AI-powered plant health analysis</Text>
      </View>

      <View style={styles.scanSection}>
        <Text style={styles.sectionTitle}>📸 Scan Your Crops</Text>
        
        <View style={styles.scanButtons}>
          <TouchableOpacity style={styles.scanButton} onPress={handleCameraPress}>
            <Camera size={32} color="#FFFFFF" />
            <Text style={styles.scanButtonText}>Take Photo</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.scanButton, styles.uploadButton]} onPress={handleUploadPress}>
            <Upload size={32} color="#228B22" />
            <Text style={[styles.scanButtonText, { color: '#228B22' }]}>Upload Photo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.scanTips}>
          <Text style={styles.tipsTitle}>📋 Scanning Tips</Text>
          <Text style={styles.tipText}>• Hold camera 6-12 inches from plant</Text>
          <Text style={styles.tipText}>• Ensure good lighting conditions</Text>
          <Text style={styles.tipText}>• Focus on affected leaves or areas</Text>
          <Text style={styles.tipText}>• Take multiple angles if needed</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔍 Recent Scans</Text>
        
        <RecentScan
          cropType="Tomato Plant"
          result="Early Blight Detected"
          confidence={87}
          date="2 hours ago"
          status="warning"
        />

        <RecentScan
          cropType="Bell Pepper"
          result="Healthy Plant"
          confidence={95}
          date="Yesterday"
          status="healthy"
        />

        <RecentScan
          cropType="Lettuce"
          result="Aphid Infestation"
          confidence={92}
          date="2 days ago"
          status="critical"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💊 Treatment Recommendations</Text>
        
        <TreatmentCard
          disease="Early Blight"
          treatment="Apply copper-based fungicide every 7-10 days. Remove affected leaves and improve air circulation around plants."
          urgency="medium"
        />

        <TreatmentCard
          disease="Aphid Infestation"
          treatment="Spray with neem oil solution or introduce ladybugs. Remove heavily infested leaves immediately."
          urgency="high"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📊 Common Issues This Season</Text>
        
        <View style={styles.commonIssues}>
          <View style={styles.issueItem}>
            <Bug size={20} color="#DC143C" />
            <View style={styles.issueInfo}>
              <Text style={styles.issueName}>Aphids</Text>
              <Text style={styles.issueDescription}>Peak season - check plants daily</Text>
            </View>
          </View>

          <View style={styles.issueItem}>
            <Leaf size={20} color="#DAA520" />
            <View style={styles.issueInfo}>
              <Text style={styles.issueName}>Fungal Diseases</Text>
              <Text style={styles.issueDescription}>High humidity increases risk</Text>
            </View>
          </View>

          <View style={styles.issueItem}>
            <Droplets size={20} color="#4682B4" />
            <View style={styles.issueInfo}>
              <Text style={styles.issueName}>Overwatering</Text>
              <Text style={styles.issueDescription}>Monitor soil moisture levels</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.offlineNote}>
        <Text style={styles.offlineTitle}>🔄 Offline Mode</Text>
        <Text style={styles.offlineText}>
          Disease detection works offline using on-device AI. Results are saved locally and will sync when connected to internet.
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
  scanSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 16,
  },
  scanButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  scanButton: {
    backgroundColor: '#228B22',
    flex: 0.48,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  uploadButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#228B22',
  },
  scanButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 8,
  },
  scanTips: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  scanCard: {
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
  scanHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  scanInfo: {
    flex: 1,
  },
  scanCrop: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  scanDate: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  scanResult: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  scanConfidence: {
    fontSize: 12,
    color: '#666',
  },
  treatmentCard: {
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
  treatmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  treatmentDisease: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  urgencyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  urgencyText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  treatmentText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  commonIssues: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  issueItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  issueInfo: {
    marginLeft: 12,
    flex: 1,
  },
  issueName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  issueDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  offlineNote: {
    margin: 16,
    backgroundColor: '#E8F5E8',
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#228B22',
  },
  offlineTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F4F2F',
    marginBottom: 8,
  },
  offlineText: {
    fontSize: 14,
    color: '#2F4F2F',
    lineHeight: 20,
  },
});