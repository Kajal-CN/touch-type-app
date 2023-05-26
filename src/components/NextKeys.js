import React from 'react';

const NextKeys = ({ keys }) => {
  return (
    <div style={styles.container}>
      <p style={styles.heading}>Next Keys:</p>
      <ul style={styles.keyList}>
        {keys.map((key, index) => (
          <li key={index} style={styles.keyItem}>{key}</li>
        ))}
      </ul>
    </div>
  );
};

export default NextKeys;

const styles = {
  container: {
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '5px',
    margin: '10px 0',
  },
  heading: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  keyList: {
    listStyleType: 'none',
    padding: 0,
  },
  keyItem: {
    margin: '5px',
    display: 'inline-block',
    backgroundColor: '#e0e0e0',
    padding: '5px 10px',
    borderRadius: '3px',
  },
};
