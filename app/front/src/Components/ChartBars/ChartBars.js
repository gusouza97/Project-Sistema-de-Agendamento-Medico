// libs
// import PropTypes, { array } from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

// Styles
import '../../Assets/Styles/global.css';
// import style from './ChartBars.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

function ChartBars({ dataChartBar }) {
  useEffect(() => {
    setTimeout(() => {
      console.log(dataChartBar);
    }, 2000);
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.6,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => [0, 20]),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => [0, 52]),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <div className="flex width_100">
      <Bar options={options} height={100} width={100} data={data} />
    </div>
  );
}

/* ChartBars.propTypes = {
  dataChartBar: PropTypes.arrayOf(array()).isRequired,
};

const myPropTypes = {
  dataChartBar: PropTypes.arrayOf(array()),
};

const props = {
  dataChartBar: [1, 2, 3],
}; */

// PropTypes.checkPropTypes(myPropTypes, props, 'prop', 'ChartBars');

export default ChartBars;
