import React, { useState } from 'react';

type AlignValues = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
type JustifyValues = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

export function FlexAlignDemo() {
  const [justifyContent, setJustifyContent] = useState<JustifyValues>('flex-start');
  const [alignItems, setAlignItems] = useState<AlignValues>('stretch');

  return (
    <div style={{ marginBottom: '30px' }}>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            justify-content（主軸方向の配置）:
          </label>
          <select 
            value={justifyContent} 
            onChange={(e) => setJustifyContent(e.target.value as JustifyValues)}
            style={{ 
              padding: '8px 12px', 
              borderRadius: '4px', 
              border: '1px solid #ddd',
              fontSize: '14px'
            }}
          >
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
            <option value="space-evenly">space-evenly</option>
          </select>
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            align-items（交差軸方向の配置）:
          </label>
          <select 
            value={alignItems} 
            onChange={(e) => setAlignItems(e.target.value as AlignValues)}
            style={{ 
              padding: '8px 12px', 
              borderRadius: '4px', 
              border: '1px solid #ddd',
              fontSize: '14px'
            }}
          >
            <option value="stretch">stretch</option>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="baseline">baseline</option>
          </select>
        </div>
      </div>

      <div style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
        現在の設定: <code>justify-content: {justifyContent}</code> | <code>align-items: {alignItems}</code>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent,
          alignItems,
          height: '200px',
          padding: '20px',
          border: '2px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
          gap: '10px'
        }}
      >
        <div style={{
          padding: '15px',
          backgroundColor: '#4caf50',
          color: 'white',
          borderRadius: '4px',
          fontSize: '14px',
          fontWeight: 'bold'
        }}>
          アイテム 1
        </div>
        <div style={{
          padding: '25px 15px',
          backgroundColor: '#2196f3',
          color: 'white',
          borderRadius: '4px',
          fontSize: '16px',
          fontWeight: 'bold'
        }}>
          アイテム 2<br/>（高さ異なる）
        </div>
        <div style={{
          padding: '10px 15px',
          backgroundColor: '#ff9800',
          color: 'white',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          アイテム 3<br/>（小さめ）
        </div>
      </div>
    </div>
  );
}

export function FlexAlignExamples() {
  return (
    <div style={{ display: 'grid', gap: '30px' }}>
      {/* justify-content 例 */}
      <div>
        <h4 style={{ marginBottom: '15px' }}>justify-content の各値</h4>
        <div style={{ display: 'grid', gap: '20px' }}>
          {(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'] as JustifyValues[]).map((justify) => (
            <div key={justify}>
              <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                {justify}
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: justify,
                  alignItems: 'center',
                  height: '80px',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  backgroundColor: '#f9f9f9',
                  gap: '10px'
                }}
              >
                <div style={{ padding: '10px', backgroundColor: '#4caf50', color: 'white', borderRadius: '4px' }}>A</div>
                <div style={{ padding: '10px', backgroundColor: '#2196f3', color: 'white', borderRadius: '4px' }}>B</div>
                <div style={{ padding: '10px', backgroundColor: '#ff9800', color: 'white', borderRadius: '4px' }}>C</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* align-items 例 */}
      <div>
        <h4 style={{ marginBottom: '15px' }}>align-items の各値</h4>
        <div style={{ display: 'grid', gap: '20px' }}>
          {(['stretch', 'flex-start', 'flex-end', 'center', 'baseline'] as AlignValues[]).map((align) => (
            <div key={align}>
              <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>
                {align}
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: align,
                  height: '100px',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  backgroundColor: '#f9f9f9',
                  gap: '10px'
                }}
              >
                <div style={{ 
                  padding: '10px', 
                  backgroundColor: '#4caf50', 
                  color: 'white', 
                  borderRadius: '4px',
                  ...(align === 'stretch' ? {} : { height: 'fit-content' })
                }}>
                  小
                </div>
                <div style={{ 
                  padding: '20px 10px', 
                  backgroundColor: '#2196f3', 
                  color: 'white', 
                  borderRadius: '4px',
                  fontSize: '18px',
                  ...(align === 'stretch' ? {} : { height: 'fit-content' })
                }}>
                  中
                </div>
                <div style={{ 
                  padding: '30px 10px', 
                  backgroundColor: '#ff9800', 
                  color: 'white', 
                  borderRadius: '4px',
                  fontSize: '24px',
                  ...(align === 'stretch' ? {} : { height: 'fit-content' })
                }}>
                  大
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}