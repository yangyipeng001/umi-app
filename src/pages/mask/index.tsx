/**
 * 模仿视频直播弹幕
 */

import s from './index.scss';

const MaskCss = () => {
  const list: number[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];

  const renderChild = () => {
    return list.map((item) => {
      return (
        <div key={item} className={s.gBarrage}>
          666666666
        </div>
      );
    });
  };

  return (
    <div className={s.maskWrap}>
      <div className={s.gYasuo}></div>

      <div className={s.gBarrageContainer}>{renderChild()}</div>
    </div>
  );
};

export default MaskCss;
