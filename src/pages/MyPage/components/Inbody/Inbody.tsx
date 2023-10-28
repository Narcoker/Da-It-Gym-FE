import * as S from "./Inbody.style";
import ApexChart from "react-apexcharts";
import * as COLOR from "../../../../constants/color";

interface Props {
  score: number;
}

export default function Inbody({ score }: Props) {
  // const data = [120, 150, 67, 18, 32];
  const normData = [
    90,
    Math.floor((1500 / 1700) * 100),
    67,
    Math.floor((1 - 24 / 50) * 100),
    Math.floor((32 / 50) * 100),
  ];
  const avgNormData = [
    80,
    Math.floor((1100 / 1700) * 100),
    67,
    Math.floor((1 - 15 / 50) * 100),
    Math.floor((30 / 50) * 100),
  ];
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
          series={[{ name: "현재", data: [29.3, 30, 31] }]}
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
              categories: ["23.09", "23.10", "23.11"],
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
          series={[{ name: "체지방량", data: [20, 18, 17], color: `${COLOR.Red}` }]}
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
              categories: ["23.09", "23.10", "23.11"],
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
          series={[{ name: "몸무게", data: [67, 67.5, 67.4], color: `${COLOR.Purple2}` }]}
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
              categories: ["23.09", "23.10", "23.11"],
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
