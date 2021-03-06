import React, { Suspense, useState } from 'react';
import { withRouter } from 'react-router-dom';
import arrayUser from '../../../BDusers/index';
import Loading from '../../loading/Loading';
import Column from '../../UI/column/Column';
import store from '../../../redux/index';
import Navbar from '../../navbar/Navbar';
import Image from '../../UI/img/Img';
import Svg from '../../UI/svg/Svg';
import Img from 'react-image';
import './Chats.sass';

function Chats(props) {

  const [showimage, setShowImage] = useState(false);

  const changeImageHandler = (index, img, name) => {
    setShowImage(!showimage);
    store.dispatch({
      type: 'SHOW_IMAGE',
      image: {
        index,
        img,
        name
      }
    })
  }

  const changeComponentHandler = (index) => {
    props.history.push(`/chats/${index}`);
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        {showimage == true ? <Image /> : ''}
        {arrayUser.map((user, index) => {
          return (
            <div id="prueba" className="chats_container" key={index}>
              <div className="chats_container_img">
                <Img
                  onClick={() => changeImageHandler(index, user.img, user.name)}
                  className="chats_container_img__primary"
                  src={user.img}
                  loader={<div class="loading__img"></div>}
                  unloader={<div class="loading__img"></div>}
                />
              </div>
              <div id={`div_${index}`} className="hide__chats_container_img">
                <h5 id={`name_${index}`} className="hideImage"> {user.name}</h5>
                <img id={index} className="hideImage" src={user.img}></img>
              </div>
              <div onClick={() => changeComponentHandler(index)}
                className="chats_container__message">
                <div className="chats_container__message__nameAndDate">
                  <h3>
                    {user.name}
                  </h3>
                  <h4 style={{ color: 'gray', fontSize: '14px' }}
                    className={`chats_container__message__nameAndDate__sound`}>
                    {user.date}
                  </h4>
                </div>
                <div className="chats_container__message__iconAndMessage">
                  <h3 style={{ color: 'gray', fontSize: '16px' }} >
                    {user.message}
                  </h3>
                  <span>
                    <Svg classIcon={`chats_container__message__iconAndMessage__icon`}
                      icon={user.iconChats} color="#cecece" />
                  </span>
                </div>
              </div>
              <Column background={user.colorBackground}
                name={user.name} />
            </div>
          )
        })}
      </Suspense>
    </>
  );
}

export default withRouter(Chats);
