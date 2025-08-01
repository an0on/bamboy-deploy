import TextPressure from './TextPressure';

export const AnimatedTitle = () => {
  return (
    <div style={{position: 'relative', height: '300px'}}>
      <TextPressure
        text="BAMBOY"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={36}
      />
    </div>
  );
};