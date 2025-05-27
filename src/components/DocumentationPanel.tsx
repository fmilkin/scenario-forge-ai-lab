
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Eye } from 'lucide-react';

const DocumentationPanel = () => {
  const documentSections = [
    {
      title: 'Scenario Overview',
      content: 'This AML scenario detects potential structuring activities by identifying patterns of multiple transactions just below regulatory reporting thresholds.',
      status: 'complete'
    },
    {
      title: 'Detection Logic',
      content: 'The algorithm analyzes transaction frequency, amounts, and timing patterns to identify suspicious structuring behavior.',
      status: 'complete'
    },
    {
      title: 'Risk Scoring',
      content: 'Risk scores are calculated based on transaction proximity to thresholds, frequency clustering, and historical patterns.',
      status: 'complete'
    },
    {
      title: 'Implementation Notes',
      content: 'Code implements configurable thresholds and time windows for flexible deployment across different regulatory environments.',
      status: 'complete'
    }
  ];

  const compliance = [
    { regulation: 'BSA/AML', status: 'Compliant', coverage: '95%' },
    { regulation: 'FinCEN', status: 'Compliant', coverage: '92%' },
    { regulation: 'FATF Guidelines', status: 'Partial', coverage: '78%' },
    { regulation: 'Wolfsberg Principles', status: 'Compliant', coverage: '88%' }
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-blue-600" />
            <span>Generated Documentation</span>
          </CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Documentation Sections */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Documentation Sections</h4>
          {documentSections.map((section, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-medium">{section.title}</h5>
                <Badge variant={section.status === 'complete' ? 'default' : 'secondary'}>
                  {section.status}
                </Badge>
              </div>
              <p className="text-sm text-gray-600">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Compliance Matrix */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Regulatory Compliance</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left p-3 font-medium">Regulation</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Coverage</th>
                </tr>
              </thead>
              <tbody>
                {compliance.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3 font-medium">{item.regulation}</td>
                    <td className="p-3">
                      <Badge variant={item.status === 'Compliant' ? 'default' : 'secondary'}>
                        {item.status}
                      </Badge>
                    </td>
                    <td className="p-3">{item.coverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h5 className="font-medium text-blue-900 mb-2">Documentation Metrics</h5>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-medium text-blue-800">Coverage</div>
              <div className="text-blue-700">98% Complete</div>
            </div>
            <div>
              <div className="font-medium text-blue-800">Pages</div>
              <div className="text-blue-700">24 Pages</div>
            </div>
            <div>
              <div className="font-medium text-blue-800">Last Updated</div>
              <div className="text-blue-700">Just now</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentationPanel;
