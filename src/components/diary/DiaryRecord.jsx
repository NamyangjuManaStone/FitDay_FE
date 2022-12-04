import { foodlist } from '../../constant/homeData';
import * as S from './DiaryRecord.styled';

const DiaryRecord = () => {
  return (
    <S.DiaryRecordLayout>
      <div className="record-box">
        <div className="record-box__input">
          <input className="record-box__input-box"></input>
        </div>
        <div className="record-box__check">
          {foodlist.map(({ name }) => (
            <div className="record-box__check-list" key={name}>
              <input className="check" type="checkbox" />
              <span>{name}</span>
              <hr />
            </div>
          ))}
        </div>
        <div className="record-box__total">
          <button className="record-box__total-button">취소</button>
          <button className="record-box__total-button">등록</button>
        </div>
      </div>
    </S.DiaryRecordLayout>
  );
};

export default DiaryRecord;
