
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Code, Copy, Download, Play } from 'lucide-react';

const CodeViewer = () => {
  const [copied, setCopied] = useState(false);

  const pythonCode = `import pandas as pd
import numpy as np
from datetime import datetime, timedelta

class AMLStructuringDetector:
    def __init__(self, threshold=10000, time_window_hours=24):
        self.threshold = threshold
        self.time_window_hours = time_window_hours
    
    def detect_structuring_patterns(self, transactions_df):
        """
        Detect potential structuring patterns in transaction data
        """
        suspicious_accounts = []
        
        # Group by account and analyze patterns
        for account_id in transactions_df['account_id'].unique():
            account_txns = transactions_df[
                transactions_df['account_id'] == account_id
            ].sort_values('timestamp')
            
            # Check for multiple transactions just below threshold
            near_threshold = account_txns[
                (account_txns['amount'] >= self.threshold * 0.8) & 
                (account_txns['amount'] < self.threshold)
            ]
            
            if len(near_threshold) >= 3:
                # Check if transactions occur within time window
                time_groups = self._group_by_time_window(near_threshold)
                
                for group in time_groups:
                    if len(group) >= 2 and group['amount'].sum() > self.threshold:
                        suspicious_accounts.append({
                            'account_id': account_id,
                            'pattern': 'structuring',
                            'transactions': len(group),
                            'total_amount': group['amount'].sum(),
                            'risk_score': self._calculate_risk_score(group)
                        })
        
        return suspicious_accounts
    
    def _group_by_time_window(self, transactions):
        """Group transactions by time window"""
        groups = []
        # Implementation for time-based grouping
        return groups
    
    def _calculate_risk_score(self, transactions):
        """Calculate risk score based on transaction patterns"""
        score = 0
        # Scoring logic based on frequency, amounts, timing
        return min(score, 100)

# Example usage
detector = AMLStructuringDetector()
results = detector.detect_structuring_patterns(sample_data)`;

  const handleCopy = () => {
    navigator.clipboard.writeText(pythonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Code className="h-5 w-5 text-purple-600" />
            <span>Generated Python Code</span>
          </CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={handleCopy}>
              <Copy className="h-4 w-4 mr-2" />
              {copied ? 'Copied!' : 'Copy'}
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <Play className="h-4 w-4 mr-2" />
              Run Test
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="main" className="space-y-4">
          <TabsList>
            <TabsTrigger value="main">Main Logic</TabsTrigger>
            <TabsTrigger value="utils">Utilities</TabsTrigger>
            <TabsTrigger value="config">Configuration</TabsTrigger>
          </TabsList>

          <TabsContent value="main">
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Badge variant="secondary">Python 3.8+</Badge>
                <Badge variant="secondary">Pandas</Badge>
                <Badge variant="secondary">NumPy</Badge>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-100">
                  <code>{pythonCode}</code>
                </pre>
              </div>

              <div className="text-xs text-gray-500 bg-blue-50 p-3 rounded-lg border border-blue-200">
                <strong>Code Features:</strong> Implements structuring detection with configurable thresholds, 
                time window analysis, and risk scoring. Includes pattern matching for transactions just below 
                reporting limits.
              </div>
            </div>
          </TabsContent>

          <TabsContent value="utils">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-100">
                <code>{`# Utility functions for AML detection
import pandas as pd
from typing import List, Dict

def load_transaction_data(file_path: str) -> pd.DataFrame:
    """Load and validate transaction data"""
    df = pd.read_csv(file_path)
    df['timestamp'] = pd.to_datetime(df['timestamp'])
    return df

def export_results(results: List[Dict], output_path: str):
    """Export detection results to CSV"""
    results_df = pd.DataFrame(results)
    results_df.to_csv(output_path, index=False)

def generate_report(results: List[Dict]) -> str:
    """Generate summary report"""
    total_cases = len(results)
    high_risk = len([r for r in results if r['risk_score'] > 70])
    return f"Found {total_cases} suspicious patterns, {high_risk} high-risk cases"`}</code>
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="config">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-100">
                <code>{`# Configuration settings
AML_CONFIG = {
    "thresholds": {
        "cash_reporting": 10000,
        "wire_reporting": 3000,
        "structuring_detection": 0.8  # 80% of threshold
    },
    "time_windows": {
        "structuring": 24,  # hours
        "velocity": 7,      # days
        "pattern_analysis": 30  # days
    },
    "risk_factors": {
        "frequency_multiplier": 1.5,
        "amount_proximity": 2.0,
        "time_clustering": 1.3
    }
}`}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CodeViewer;
