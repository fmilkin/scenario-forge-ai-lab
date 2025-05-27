
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Lightbulb, Star, ArrowRight } from 'lucide-react';

const EnhancementRecommendations = () => {
  const recommendations = [
    {
      category: 'Performance',
      priority: 'High',
      title: 'Implement Real-time Processing',
      description: 'Add streaming data processing capabilities for real-time transaction monitoring.',
      impact: 'Reduce detection latency from hours to seconds',
      effort: 'Medium',
      technologies: ['Apache Kafka', 'Apache Flink']
    },
    {
      category: 'Accuracy',
      priority: 'High',
      title: 'Machine Learning Enhancement',
      description: 'Integrate advanced ML models for pattern recognition and anomaly detection.',
      impact: 'Improve detection accuracy by 15-20%',
      effort: 'High',
      technologies: ['Scikit-learn', 'TensorFlow', 'XGBoost']
    },
    {
      category: 'Features',
      priority: 'Medium',
      title: 'Entity Resolution',
      description: 'Add customer entity resolution to detect relationships across accounts.',
      impact: 'Identify complex money laundering networks',
      effort: 'Medium',
      technologies: ['Graph Databases', 'Neo4j']
    },
    {
      category: 'Compliance',
      priority: 'Medium',
      title: 'Regulatory Reporting',
      description: 'Automated SAR/STR report generation with regulatory templates.',
      impact: 'Reduce compliance workload by 60%',
      effort: 'Low',
      technologies: ['Report Templates', 'APIs']
    }
  ];

  const getPriorityBadge = (priority: string) => {
    const colors = {
      'High': 'bg-red-100 text-red-800 border-red-300',
      'Medium': 'bg-yellow-100 text-yellow-800 border-yellow-300',
      'Low': 'bg-green-100 text-green-800 border-green-300'
    };
    return <Badge className={colors[priority as keyof typeof colors]}>{priority}</Badge>;
  };

  const getEffortBadge = (effort: string) => {
    const colors = {
      'High': 'bg-gray-100 text-gray-800 border-gray-300',
      'Medium': 'bg-blue-100 text-blue-800 border-blue-300',
      'Low': 'bg-green-100 text-green-800 border-green-300'
    };
    return <Badge variant="outline" className={colors[effort as keyof typeof colors]}>{effort} Effort</Badge>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-orange-600" />
          <span>Enhancement Recommendations</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Lightbulb className="h-4 w-4 text-yellow-500" />
                  <h5 className="font-medium">{rec.title}</h5>
                </div>
                <div className="flex space-x-2">
                  {getPriorityBadge(rec.priority)}
                  {getEffortBadge(rec.effort)}
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Star className="h-3 w-3 text-green-500" />
                  <span className="text-green-700">{rec.impact}</span>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {rec.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end mt-3">
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                  Learn More
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="h-4 w-4 text-blue-600" />
            <h5 className="font-medium text-blue-900">Implementation Roadmap</h5>
          </div>
          <p className="text-sm text-blue-800 mb-3">
            Recommended implementation order based on impact and effort analysis:
          </p>
          <div className="text-sm text-blue-700">
            <div className="font-medium">Phase 1 (Q1):</div>
            <div className="ml-4 mb-2">• Regulatory Reporting • Performance Optimization</div>
            <div className="font-medium">Phase 2 (Q2):</div>
            <div className="ml-4 mb-2">• Real-time Processing • Entity Resolution</div>
            <div className="font-medium">Phase 3 (Q3):</div>
            <div className="ml-4">• Machine Learning Enhancement • Advanced Analytics</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnhancementRecommendations;
