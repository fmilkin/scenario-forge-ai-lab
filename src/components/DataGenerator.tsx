
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Database, Download, RefreshCw } from 'lucide-react';

const DataGenerator = () => {
  const sampleData = [
    { id: 'TXN001', amount: 9500, type: 'Cash Deposit', account: 'ACC123456', timestamp: '2024-01-15 09:30:00' },
    { id: 'TXN002', amount: 9800, type: 'Wire Transfer', account: 'ACC123456', timestamp: '2024-01-15 14:45:00' },
    { id: 'TXN003', amount: 8900, type: 'Cash Deposit', account: 'ACC123456', timestamp: '2024-01-16 10:15:00' },
    { id: 'TXN004', amount: 9200, type: 'International Wire', account: 'ACC123456', timestamp: '2024-01-16 16:20:00' },
    { id: 'TXN005', amount: 9600, type: 'Cash Deposit', account: 'ACC789012', timestamp: '2024-01-17 11:00:00' }
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-5 w-5 text-green-600" />
            <span>Generated Sample Data</span>
          </CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Regenerate
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-4 text-sm">
            <Badge variant="secondary">5,000 transactions</Badge>
            <Badge variant="secondary">50 accounts</Badge>
            <Badge variant="secondary">30 days period</Badge>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left p-3 font-medium">Transaction ID</th>
                  <th className="text-left p-3 font-medium">Amount</th>
                  <th className="text-left p-3 font-medium">Type</th>
                  <th className="text-left p-3 font-medium">Account</th>
                  <th className="text-left p-3 font-medium">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-mono text-blue-600">{row.id}</td>
                    <td className="p-3 font-medium">${row.amount.toLocaleString()}</td>
                    <td className="p-3">
                      <Badge variant="outline" className="text-xs">
                        {row.type}
                      </Badge>
                    </td>
                    <td className="p-3 font-mono text-gray-600">{row.account}</td>
                    <td className="p-3 text-gray-600">{row.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
            <strong>Data Generation Notes:</strong> Sample data includes realistic transaction patterns, 
            amounts near reporting thresholds, and temporal clustering to simulate structuring behavior.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataGenerator;
