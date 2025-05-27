
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, AlertTriangle, XCircle, TrendingUp } from 'lucide-react';

const TestResults = () => {
  const testMetrics = {
    accuracy: 94.2,
    precision: 89.6,
    recall: 91.3,
    f1Score: 90.4
  };

  const detectionResults = [
    {
      accountId: 'ACC123456',
      riskScore: 95,
      pattern: 'Structuring',
      transactions: 8,
      totalAmount: 76400,
      status: 'High Risk'
    },
    {
      accountId: 'ACC789012',
      riskScore: 78,
      pattern: 'Velocity',
      transactions: 12,
      totalAmount: 145000,
      status: 'Medium Risk'
    },
    {
      accountId: 'ACC456789',
      riskScore: 88,
      pattern: 'Cross-border',
      transactions: 5,
      totalAmount: 89000,
      status: 'High Risk'
    }
  ];

  const testCases = [
    { name: 'Structuring Detection', status: 'passed', details: '15/15 test cases passed' },
    { name: 'False Positive Rate', status: 'passed', details: 'Below 5% threshold' },
    { name: 'Performance Benchmark', status: 'passed', details: 'Processing 10k records/sec' },
    { name: 'Edge Case Handling', status: 'warning', details: '2 minor issues identified' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'failed': return <XCircle className="h-4 w-4 text-red-600" />;
      default: return null;
    }
  };

  const getRiskBadge = (score: number) => {
    if (score >= 80) return <Badge className="bg-red-100 text-red-800 border-red-300">High Risk</Badge>;
    if (score >= 60) return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">Medium Risk</Badge>;
    return <Badge className="bg-green-100 text-green-800 border-green-300">Low Risk</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Test Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <span>Model Performance Metrics</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(testMetrics).map(([metric, value]) => (
              <div key={metric} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{value}%</div>
                <div className="text-sm text-gray-600 capitalize">
                  {metric.replace(/([A-Z])/g, ' $1').trim()}
                </div>
                <Progress value={value} className="mt-2 h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Test Cases */}
      <Card>
        <CardHeader>
          <CardTitle>Test Case Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {testCases.map((test, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(test.status)}
                  <div>
                    <div className="font-medium">{test.name}</div>
                    <div className="text-sm text-gray-600">{test.details}</div>
                  </div>
                </div>
                <Badge variant={test.status === 'passed' ? 'default' : 'secondary'}>
                  {test.status.toUpperCase()}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detection Results */}
      <Card>
        <CardHeader>
          <CardTitle>Suspicious Activity Detected</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left p-3 font-medium">Account ID</th>
                  <th className="text-left p-3 font-medium">Risk Score</th>
                  <th className="text-left p-3 font-medium">Pattern</th>
                  <th className="text-left p-3 font-medium">Transactions</th>
                  <th className="text-left p-3 font-medium">Total Amount</th>
                  <th className="text-left p-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {detectionResults.map((result, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-mono text-blue-600">{result.accountId}</td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{result.riskScore}</span>
                        <Progress value={result.riskScore} className="w-16 h-2" />
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge variant="outline">{result.pattern}</Badge>
                    </td>
                    <td className="p-3">{result.transactions}</td>
                    <td className="p-3 font-medium">${result.totalAmount.toLocaleString()}</td>
                    <td className="p-3">{getRiskBadge(result.riskScore)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestResults;
