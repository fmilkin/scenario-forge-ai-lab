
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Brain, Sparkles, AlertTriangle } from 'lucide-react';

interface ScenarioInputProps {
  value: string;
  onChange: (value: string) => void;
  onGenerate: () => void;
  isProcessing: boolean;
}

const ScenarioInput: React.FC<ScenarioInputProps> = ({ 
  value, 
  onChange, 
  onGenerate, 
  isProcessing 
}) => {
  const exampleScenarios = [
    "Detect unusual cash deposits followed by immediate wire transfers",
    "Identify structuring patterns in customer transactions",
    "Monitor high-risk geography transaction flows",
    "Flag suspicious business account activity patterns"
  ];

  const handleExampleClick = (example: string) => {
    onChange(example);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-blue-600" />
            <span>Scenario Input</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="scenario-input" className="text-sm font-medium">
              Describe your AML scenario idea
            </Label>
            <Textarea
              id="scenario-input"
              placeholder="Describe the money laundering pattern or suspicious activity you want to detect..."
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="mt-2 min-h-[120px] resize-none"
            />
          </div>

          <Button 
            onClick={onGenerate}
            disabled={!value.trim() || isProcessing}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            {isProcessing ? (
              <>
                <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                Generating Scenario...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Generate AML Scenario
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <span>Example Scenarios</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {exampleScenarios.map((scenario, index) => (
              <button
                key={index}
                onClick={() => handleExampleClick(scenario)}
                className="w-full text-left p-3 text-sm bg-gray-50 hover:bg-blue-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors duration-200"
              >
                {scenario}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScenarioInput;
