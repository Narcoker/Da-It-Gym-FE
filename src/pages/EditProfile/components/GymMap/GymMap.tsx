import React, { useState, useEffect, useRef } from "react";
import * as S from "./GymMap.style";
import Button from "../../../../components/Button/Button";
import * as Icon from "../../../../components/Icon";
import { MapMarker } from "react-kakao-maps-sdk";

interface Marker {
  position: {
    lat: number;
    lng: number;
  };
  content: string;
}

interface Position {
  coords: {
    latitude: number;
    longitude: number;
  };
}

interface Props {
  setGym: React.Dispatch<React.SetStateAction<string>>;
}

export default function GymMap({ setGym }: Props) {
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });
  // const [currentLocationToggle, setCurrentLocationToggle] = useState(false);
  // const [toggleId, setToggleId] = useState(0);
  // const [nearbyToggle, setNearbyToggle] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [info, setInfo] = useState<Marker | null>(null);
  // * 사용자 위치정보 허용했을 경우 해당 위도/경도 설정
  const approve = (position: Position) =>
    setCoords({ lat: position.coords.latitude, lon: position.coords.longitude });

  // * 사용자 위치정보 거절하거나 오류일 경우 을지로 3가 위도/경도 설정
  const reject = () => setCoords({ lat: 37.566498652285, lon: 126.99209745028 });

  // * 현재 위치 버튼 클릭 시 currentLocationToggle true/false 값 변경
  // const onCurrentLocationClickHandler = () =>
  //   setCurrentLocationToggle(!currentLocationToggle);

  // * 페이지가 처음 마운트될 때 위치 정보 동의
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(approve, reject);
  }, []);

  const selectHandler = (marker: Marker) => {
    setGym(marker.content);
    searchHandler(marker.content);
  };

  const searchHandler = (keyword: string) => {
    // const keyword = inputRef.current!.value;

    if (!keyword || keyword.trim() === "" || !map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(`${keyword} 헬스장`, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        const addMarkers = [];

        for (let i = 0; i < data.length; i += 1) {
          addMarkers.push({
            position: {
              lat: Number(data[i].y),
              lng: Number(data[i].x),
            },
            content: data[i].place_name,
          });
          bounds.extend(new kakao.maps.LatLng(Number(data[i].y), Number(data[i].x)));
        }

        setMarkers(addMarkers);
        map!.setBounds(bounds);
      }
    });
  };

  const enterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchHandler(inputRef.current!.value);
    }
  };

  return (
    <>
      <S.SearchInputBox>
        <S.SearchInput
          placeholder={"헬스장을 검색해보세요"}
          ref={inputRef}
          onKeyDown={enterHandler}
        />
        <Button
          display="block"
          size="medium"
          type="fill"
          onClick={() => searchHandler(inputRef.current!.value)}
        >
          검색
        </Button>
      </S.SearchInputBox>
      {/* <KakaoMap coords={coords} /> */}

      {/*  */}
      <>
        {/* 로드뷰를 표시할 Container */}
        <S.MapWrapper>
          <S.MapStyle
            // 중심으로 설정할 위치
            center={{
              lat: coords.lat,
              lng: coords.lon,
            }}
            level={3}
            onCreate={setMap}
          >
            {markers.map((marker) => (
              <MapMarker
                key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
                // 표시 위치
                position={marker.position}
                onClick={() => setInfo(marker)}
              >
                {info && info.content === marker.content && (
                  <S.MarkerInfo>
                    {marker.content}
                    <S.Square />
                  </S.MarkerInfo>
                )}
              </MapMarker>
            ))}
          </S.MapStyle>
        </S.MapWrapper>
        <>
          {markers.length > 0 ? (
            <S.GymLists>
              {markers.map((marker, i) => (
                <React.Fragment key={i}>
                  <S.HideRadio type="radio" name="gym" id={String(i)} />
                  <S.GymList onClick={() => selectHandler(marker)} htmlFor={String(i)}>
                    <Icon.Location />
                    {marker.content}
                  </S.GymList>
                </React.Fragment>
              ))}
            </S.GymLists>
          ) : (
            <S.NoList>등록한 헬스장을 검색해 보세요</S.NoList>
          )}
        </>
      </>
    </>
  );
}
