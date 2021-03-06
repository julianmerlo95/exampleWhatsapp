import React from 'react';
import img from '../../../assets/status/julian.JPG'
import { withRouter } from 'react-router-dom';
import arrayUser from '../../../BDusers/index';
import Column from '../../UI/column/Column';
import Navbar from '../../navbar/Navbar';
import Img from 'react-image';
import './Status.sass';

function Status(props) {

  const changeComponentHandler = (index) => {
    props.history.push(`/status/${index}`)
  }

  return (
    <div>
      <Navbar />
      <div className="status">
        <div className="status__container__personal">
          <div>
            <Img
              className="status__container__user__img"
              src={img}
              loader={<div className="loading__img"></div>}
              unloader={<div className="loading__img"></div>}
            />
          </div>
          <div className="status__container__personal__data">
            <h3>My status</h3>
            <h4>Tap to add  status update</h4>
          </div>
          <Column
            background={'#0a534b'}
            name={'State'} />
        </div>
        <h3 className="status__update__status">Recent update</h3>
        {arrayUser.map((user, index) => {
          return (
            <div onClick={() => changeComponentHandler(index)}
              key={index} className="status__container__user">
              <div>
                <Img
                  className="status__container__user__img"
                  src={user.imgStatu}
                  loader={<div className="loading__img"></div>}
                  unloader={<div className="loading__img"></div>}
                />
              </div>
              <div className="status__container__user__data">
                <h3>{user.name}</h3>
                <h4>{user.date}</h4>
              </div>
              <Column
                background={user.colorBackground}
                name={user.name} />
            </div>
          )
        })}
      </div>
    </div >
  );
}

export default withRouter(Status);