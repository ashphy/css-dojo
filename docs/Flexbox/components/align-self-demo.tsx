import React, { useState } from 'react';

type AlignSelfValue = 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

interface AlignSelfDemoProps {
  interactive?: boolean;
}

export function AlignSelfDemo({ interactive = true }: AlignSelfDemoProps) {
  const [alignSelfValues, setAlignSelfValues] = useState<AlignSelfValue[]>(['auto', 'auto', 'auto']);

  const alignSelfOptions: { value: AlignSelfValue; label: string }[] = [
    { value: 'auto', label: 'auto' },
    { value: 'flex-start', label: 'flex-start' },
    { value: 'flex-end', label: 'flex-end' },
    { value: 'center', label: 'center' },
    { value: 'baseline', label: 'baseline' },
    { value: 'stretch', label: 'stretch' },
  ];

  const updateAlignSelf = (index: number, value: AlignSelfValue) => {
    const newValues = [...alignSelfValues];
    newValues[index] = value;
    setAlignSelfValues(newValues);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      {interactive && (
        <div style={{ marginBottom: '15px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>各アイテムのalign-selfを選択:</p>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            {alignSelfValues.map((value, index) => (
              <div key={index}>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>
                  アイテム {index + 1}:
                </label>
                <select
                  value={value}
                  onChange={(e) => updateAlignSelf(index, e.target.value as AlignSelfValue)}
                  style={{
                    padding: '6px 10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '13px',
                  }}
                >
                  {alignSelfOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          height: '150px',
          border: '2px solid #333',
          borderRadius: '8px',
          padding: '15px',
          backgroundColor: '#f8f9fa',
          gap: '15px',
        }}
      >
        {alignSelfValues.map((alignSelf, index) => (
          <div
            key={index}
            style={{
              alignSelf: alignSelf,
              width: '80px',
              height: alignSelf === 'stretch' ? 'auto' : index === 0 ? '40px' : index === 1 ? '60px' : '30px',
              backgroundColor: ['#007bff', '#28a745', '#dc3545'][index],
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 'bold',
              flexDirection: 'column',
              padding: '5px',
            }}
          >
            <span>{index + 1}</span>
            <span style={{ fontSize: '10px', marginTop: '2px' }}>
              {alignSelf}
            </span>
          </div>
        ))}
      </div>
      
      <p style={{ 
        marginTop: '10px', 
        marginBottom: '0',
        fontSize: '14px',
        color: '#666'
      }}>
        コンテナのalign-items: flex-start
      </p>
    </div>
  );
}

interface AlignSelfExampleProps {
  title: string;
  alignSelfValues: AlignSelfValue[];
  containerAlignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
}

export function AlignSelfExample({ title, alignSelfValues, containerAlignItems = 'center' }: AlignSelfExampleProps) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h4 style={{ marginBottom: '10px', fontSize: '16px' }}>{title}</h4>
      <div
        style={{
          display: 'flex',
          alignItems: containerAlignItems,
          height: '120px',
          border: '2px solid #333',
          borderRadius: '8px',
          padding: '15px',
          backgroundColor: '#f8f9fa',
          gap: '15px',
        }}
      >
        {alignSelfValues.map((alignSelf, index) => (
          <div
            key={index}
            style={{
              alignSelf: alignSelf,
              width: '70px',
              height: alignSelf === 'stretch' ? 'auto' : index === 0 ? '40px' : index === 1 ? '50px' : '30px',
              backgroundColor: ['#007bff', '#28a745', '#dc3545'][index],
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 'bold',
              flexDirection: 'column',
              padding: '3px',
            }}
          >
            <span>{index + 1}</span>
            <span style={{ fontSize: '9px', marginTop: '1px' }}>
              {alignSelf}
            </span>
          </div>
        ))}
      </div>
      <p style={{ 
        marginTop: '8px', 
        marginBottom: '0',
        fontSize: '13px',
        color: '#666'
      }}>
        コンテナのalign-items: {containerAlignItems}
      </p>
    </div>
  );
}

export function AlignSelfExamples() {
  return (
    <div>
      <AlignSelfExample
        title="デフォルト（すべてauto）"
        alignSelfValues={['auto', 'auto', 'auto']}
        containerAlignItems="center"
      />
      
      <AlignSelfExample
        title="個別に異なる配置"
        alignSelfValues={['flex-start', 'center', 'flex-end']}
        containerAlignItems="center"
      />
      
      <AlignSelfExample
        title="一つだけstretch"
        alignSelfValues={['auto', 'stretch', 'auto']}
        containerAlignItems="center"
      />
      
      <AlignSelfExample
        title="ベースライン揃え"
        alignSelfValues={['baseline', 'baseline', 'baseline']}
        containerAlignItems="flex-start"
      />
    </div>
  );
}