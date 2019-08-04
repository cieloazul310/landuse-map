import Style from 'ol/style/Style';
import Text from 'ol/style/Text';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import RenderFeature from 'ol/render/Feature';

const symbols = {
  '6301': {
    name: '墓地',
    color: 'gray',
  },
  '6311': {
    name: '田',
    color: 'limegreen',
  },
  '6312': {
    name: '畑',
    color: 'peru',
  },
  '6313': {
    name: '茶畑',
    color: 'forestgreen',
  },
  '6314': {
    name: '果樹園',
    color: 'brown',
  },
  '6321': {
    name: '広葉樹林',
    color: 'green',
  },
  '6322': {
    name: '針葉樹林',
    color: 'darkgreen',
  },
  '6323': {
    name: '竹林',
    color: 'green',
  },
  '6324': {
    name: 'ヤシ科樹林',
    color: 'green',
  },
  '6325': {
    name: 'ハイマツ地',
    color: 'darkgreen',
  },
  '6326': {
    name: '笹地',
    color: 'yellogreen',
  },
  '6327': {
    name: '荒地',
    color: 'purple',
  },
  '6331': {
    name: '温泉',
    color: 'firebrick',
  },
  '6341': {
    name: '史跡',
    color: 'olive',
  },
  '6342': {
    name: '城跡',
    color: 'olive',
  },
  '6367': {
    name: '特定重要港',
    color: 'dodgerblue',
  },
  '6368': {
    name: '重要港',
    color: 'dodgerblue',
  },
  '6375': {
    name: '空港',
    color: 'gray',
  },
  '6376': {
    name: '空港',
    color: 'gray',
  },
  '51301': {
    name: '大都市',
    color: 'gray',
  },
  '51302': {
    name: '都市',
    color: 'gray',
  },
  '51303': {
    name: '地方都市',
    color: 'gray',
  },
  '56368': {
    name: '港',
    color: 'dodgerblue',
  },
  '56375': {
    name: '空港',
    color: 'gray',
  },
};
const symbolKeys = Object.keys(symbols);

export default function symbolStyle(
  feature: RenderFeature,
  resolution: number
) {
  const ftCode: keyof typeof symbols = feature
    .getProperties()
    .ftCode.toString();
  if (symbolKeys.indexOf(ftCode.toString()) < 0) {
    return new Style();
  } else {
    const { name, color } = symbols[ftCode];
    return new Style({
      text: new Text({
        text: name,
        fill: new Fill({ color: 'white' }),
        stroke: new Stroke({ color: color, width: 4 }),
        font: 'bold 14px sans-serif',
      }),
      zIndex: 14,
    });
  }
}
