
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Brain, Database, Code, FileText, TrendingUp, Shield, Play, Download } from 'lucide-react';
import ScenarioInput from '@/components/ScenarioInput';
import DataGenerator from '@/components/DataGenerator';
import CodeViewer from '@/components/CodeViewer';
import TestResults from '@/components/TestResults';
import DocumentationPanel from '@/components/DocumentationPanel';
import EnhancementRecommendations from '@/components/EnhancementRecommendations';

const Index = () => {
  const [scenarioIdea, setScenarioIdea] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const steps = [
    { id: 'input', label: 'Scenario Input', icon: Brain },
    { id: 'data', label: 'Data Generation', icon: Database },
    { id: 'code', label: 'Python Code', icon: Code },
    { id: 'test', label: 'Testing', icon: Play },
    { id: 'docs', label: 'Documentation', icon: FileText },
    { id: 'enhance', label: 'Enhancements', icon: TrendingUp }
  ];

  const handleGenerateScenario = async () => {
    setIsProcessing(true);
    setCurrentStep(1);
    
    // Simulate processing steps
    for (let i = 0; i <= 100; i += 20) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    setIsProcessing(false);
    setCurrentStep(5);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AI AML LAB</h1>
                <p className="text-sm text-gray-600">Anti-Money Laundering Scenario Generator</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Beta v1.0
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index <= currentStep;
              const isCurrent = index === currentStep;
              
              return (
                <div key={step.id} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isActive 
                      ? 'bg-blue-600 border-blue-600 text-white' 
                      : 'border-gray-300 text-gray-400'
                  } ${isCurrent ? 'ring-4 ring-blue-200' : ''}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className={`text-xs mt-2 transition-colors duration-300 ${
                    isActive ? 'text-blue-600 font-medium' : 'text-gray-400'
                  }`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
          
          {isProcessing && (
            <div className="mt-4">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Processing your AML scenario... {progress}%
              </p>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Input */}
          <div className="lg:col-span-1">
            <ScenarioInput 
              value={scenarioIdea}
              onChange={setScenarioIdea}
              onGenerate={handleGenerateScenario}
              isProcessing={isProcessing}
            />
          </div>

          {/* Right Column - Results */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="data">Data</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="results">Results</TabsTrigger>
                <TabsTrigger value="docs">Docs</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Brain className="h-5 w-5 text-blue-600" />
                      <span>Scenario Overview</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {scenarioIdea ? (
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <h4 className="font-medium text-blue-900 mb-2">Your Scenario Idea:</h4>
                          <p className="text-blue-800">{scenarioIdea}</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-lg border">
                            <h5 className="font-medium text-gray-900 mb-2">Complexity</h5>
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-300">
                              Medium
                            </Badge>
                          </div>
                          <div className="bg-white p-4 rounded-lg border">
                            <h5 className="font-medium text-gray-900 mb-2">Risk Level</h5>
                            <Badge variant="outline" className="bg-red-50 text-red-800 border-red-300">
                              High
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        <Brain className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                        <p>Provide your AML scenario idea to get started</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="data">
                <DataGenerator />
              </TabsContent>

              <TabsContent value="code">
                <CodeViewer />
              </TabsContent>

              <TabsContent value="results">
                <TestResults />
              </TabsContent>

              <TabsContent value="docs">
                <div className="space-y-6">
                  <DocumentationPanel />
                  <EnhancementRecommendations />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
