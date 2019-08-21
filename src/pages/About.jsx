import React from 'react';
import * as charjs from 'chart.js';
import { HorizontalBar } from 'react-chartjs-2';

import 'chartjs-plugin-stacked100';
import 'chartjs-plugin-datalabels';
import * as annotations from 'chartjs-plugin-annotations';

const options = {
    responsive: true,
    plugins: {
      datalabels: {
        color: 'white'
      },
      stacked100: { enable: true },
      annotation: {
          annotations: [
            {
                type: 'box',
                id: 'a-box-1',
                xMin: 25,
                xMax:40,
                yMax: 20,
                yMin: 15,
                borderWith: 2,
                backgroundColor: 'green'
            }     
          ]
      }
    }
  }

export const About = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [99, 9, 80, 81],
    
          },
          {
            label: 'My second dataset',
            backgroundColor: 'rgba(155,99,132,0.2)',
            borderColor: 'rgba(155,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(155,99,132,0.4)',
            hoverBorderColor: 'rgba(155,99,132,1)',
            data: [99, 99, 80, 81],
                
          }
        ]
      };

    return (
      <div>
        <HorizontalBar
            data={data}
            options={options}
            plugins= {[annotations, 'stacked100', 'datalabels']}
        />
      </div>
    );
  }