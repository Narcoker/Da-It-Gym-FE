import * as S from "./Inbody.style";
import ApexChart from "react-apexcharts";
import * as COLOR from "../../../../constants/color";

interface Props {
  score: number;
}

export default function Inbody({ score }: Props) {
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
            { name: "현재", data: [120, 150, 67, 18, 32] },
            { name: "평균", data: [100, 140, 60, 20, 30] },
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
              // colors: [`${COLOR.Primary}`, `${COLOR.Purple2}`],
            },
            tooltip: {
              y: { formatter: (value) => `${value}` },
            },
            stroke: {
              show: true,
              width: 2,
              // colors: [`${COLOR.Primary}`, `${COLOR.Purple2}`],
              dashArray: 0,
            },
            markers: {
              size: 5,
              hover: {
                size: 10,
              },
              // colors: [`${COLOR.Primary}`, `${COLOR.Purple2}`],
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
