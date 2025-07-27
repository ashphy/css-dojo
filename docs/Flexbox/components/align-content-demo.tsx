import React, { useState } from 'react';

type AlignContentValue = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';

interface AlignContentDemoProps {
  alignContent?: AlignContentValue;
  interactive?: boolean;
}

export function AlignContentDemo({ alignContent = 'flex-start', interactive = true }: AlignContentDemoProps) {
  const [selectedValue, setSelectedValue] = useState<AlignContentValue>(alignContent);

  const alignContentOptions: { value: AlignContentValue; label: string }[] = [
    { value: 'flex-start', label: 'flex-start' },
    { value: 'flex-end', label: 'flex-end' },
    { value: 'center', label: 'center' },
    { value: 'space-between', label: 'space-between' },
    { value: 'space-around', label: 'space-around' },
    { value: 'space-evenly', label: 'space-evenly' },
    { value: 'stretch', label: 'stretch' },
  ];

  const currentValue = interactive ? selectedValue : alignContent;

  return (
    <div style={{ marginBottom: '20px' }}>
      {interactive && (
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
            align-content:
          </label>
          <select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value as AlignContentValue)}
            style={{
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          >
            {alignContentOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}
      
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: currentValue,
          width: '300px',
          height: '200px',
          border: '2px solid #333',
          borderRadius: '8px',
          padding: '10px',
          backgroundColor: '#f8f9fa',
          gap: '10px',
        }}
      >
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            style={{
              width: '60px',
              height: currentValue === 'stretch' ? 'auto' : '30px',
              backgroundColor: '#007bff',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>
      
      {!interactive && (
        <p style={{ 
          marginTop: '10px', 
          marginBottom: '0',
          fontSize: '14px',
          color: '#666'
        }}>
          align-content: {currentValue}
        </p>
      )}
    </div>
  );
}

export function AlignContentExamples() {
  const values: AlignContentValue[] = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch'];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
      {values.map((value) => (
        <AlignContentDemo key={value} alignContent={value} interactive={false} />
      ))}
    </div>
  );
}