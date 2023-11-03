import * as S from "./Inbody.style";
import ApexChart from "react-apexcharts";
import * as COLOR from "../../../../constants/color";

interface Props {
  score: number;
}

export default function Inbody({ score }: Props) {
  // const data = [120, 150, 67, 18, 32];
  const inbodyData = {
    avg: [80, 1100, 67, 24, 32],
    records: [
      {
        testDate: "2023-10-20",
        inbodyScore: 77,
        muscle: 29.9,
        fatPercent: 21.4,
        weight: 67.3,
        basalMetabolicRate: 1573,
      },
      {
        testDate: "2023-11-20",
        inbodyScore: 80,
        muscle: 30.2,
        fatPercent: 18.4,
        weight: 67.3,
        basalMetabolicRate: 1602,
      },
      {
        testDate: "2023-12-20",
        inbodyScore: 90,
        muscle: 30.5,
        fatPercent: 15.4,
        weight: 64.3,
        basalMetabolicRate: 1610,
      },
    ],
  };
  const len = inbodyData.records.length;
  const normData = [
    inbodyData.records[len - 1].inbodyScore,
    Math.floor((inbodyData.records[len - 1].basalMetabolicRate / 1700) * 100),
    inbodyData.records[len - 1].weight,
    Math.floor((1 - inbodyData.records[len - 1].fatPercent / 50) * 100),
    Math.floor((inbodyData.records[len - 1].muscle / 50) * 100),
  ];

  const avgNormData = [
    inbodyData.avg[0],
    Math.floor((inbodyData.avg[1] / 1700) * 100),
    inbodyData.avg[2],
    Math.floor((1 - inbodyData.avg[3] / 50) * 100),
    Math.floor((inbodyData.avg[4] / 50) * 100),
  ];

  const muscles = inbodyData.records.map((record) => record.muscle);
  const fats = inbodyData.records.map((record) => record.fatPercent);
  const weights = inbodyData.records.map((record) => record.weight);
  const dates = inbodyData.records.map((record) => record.testDate);
  return (
    <S.Wrapper>
      <S.ScoreCard>
        <S.Title>인바디 점수</S.Title>
        <S.Score>
          {score}
          <span>점</span>
        </S.Score>
      </S.ScoreCard>
      <S.RadarBox>
        <ApexChart
          type="radar"
          series={[
            //인바디 점수, 기초대사량, 체중, 체지방률, 골격근량
            { name: "현재", data: normData },
            { name: "평균", data: avgNormData },
          ]}
          options={{
            chart: {
              height: 300,
              width: "100%",
              toolbar: { show: false },
              background: "transparent",
            },
            fill: {
              opacity: 0.2,
            },
            tooltip: {
              y: { formatter: (value) => `${value}` },
            },
            stroke: {
              show: true,
              width: 2,
              dashArray: 0,
            },
            markers: {
              size: 5,
              hover: {
                size: 10,
              },
            },
            xaxis: {
              categories: ["인바디 점수", "기초대사량", "체중", "체지방률", "골격근량"],
              labels: {
                show: true,
                style: {
                  colors: ["#a8a8a8"],
                  fontSize: "11px",
                  fontFamily: "Arial",
                },
              },
            },
            yaxis: {
              show: false,
            },
          }}
        />
      </S.RadarBox>
      <S.LineChart>
        <ApexChart
          type="line"
          series={[{ name: "골격근량", data: muscles }]}
          options={{
            chart: {
              height: 350,
              type: "line",
              zoom: {
                enabled: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              show: true,
              width: 2,
              // colors: [`${COLOR.Primary}`, `${COLOR.Purple2}`],
              dashArray: 0,
            },
            title: {
              text: "골격근량",
              align: "left",
            },
            grid: {
              row: {
                colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                opacity: 0.5,
              },
            },
            xaxis: {
              categories: dates,
            },
            markers: {
              size: 5,
              hover: {
                size: 10,
              },
            },
          }}
        />
      </S.LineChart>
      <S.LineChart>
        <ApexChart
          type="line"
          series={[{ name: "체지방량", data: fats, color: `${COLOR.Red}` }]}
          options={{
            chart: {
              height: 350,
              type: "line",
              zoom: {
                enabled: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              show: true,
              width: 2,
              colors: [`${COLOR.Red}`],
              dashArray: 0,
            },
            title: {
              text: "체지방량",
              align: "left",
            },
            grid: {
              row: {
                colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                opacity: 0.5,
              },
            },
            xaxis: {
              categories: dates,
            },
            markers: {
              size: 5,
              colors: [`${COLOR.Red}`],
              hover: {
                size: 10,
              },
            },
          }}
        />
      </S.LineChart>
      <S.LineChart>
        <ApexChart
          type="line"
          series={[{ name: "몸무게", data: weights, color: `${COLOR.Purple2}` }]}
          options={{
            chart: {
              height: 350,
              type: "line",
              zoom: {
                enabled: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              show: true,
              width: 2,
              colors: [`${COLOR.Purple2}`],
              dashArray: 0,
            },
            title: {
              text: "몸무게",
              align: "left",
            },
            grid: {
              row: {
                colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                opacity: 0.5,
              },
            },
            xaxis: {
              categories: dates,
            },
            markers: {
              size: 5,
              colors: [`${COLOR.Purple2}`],
              hover: {
                size: 10,
              },
            },
          }}
        />
      </S.LineChart>
    </S.Wrapper>
  );
}
