import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <span>Franklin B</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <span>Kylan Gelt</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
              <p>
                <span>Janet Garcia</span> changed their cover picture
              </p>
            </div>
            <span style={{ fontsize: 2}}>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/7116213/pexels-photo-7116213.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
              <p>
                <span>John Brooks</span> changed their cover picture
              </p>
            </div>
            <span>36 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
              <p>
                <span>Richard Johnson</span> changed their cover picture
              </p>
            </div>
            <span>2 hrs ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
              <p>
                <span>Wendy Cades</span> changed their cover picture
              </p>
            </div>
            <span>4 hrs ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/6976943/pexels-photo-6976943.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
              <div className="online" />
              <span>Lilianna Sloan</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
              <div className="online" />
              <span>Wesley Gill</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4946515/pexels-photo-4946515.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
              <div className="online" />
              <span>Sarah Richards</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
              <div className="online" />
              <span>Grant Rivas</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/7745573/pexels-photo-7745573.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
              <div className="online" />
              <span>Luciano Conway</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
              <div className="online" />
              <span>Taylor White</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
              <div className="online" />
              <span>Noel Stone</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
              <div className="online" />
              <span>Sasha Collins</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
              <div className="online" />
              <span>Kaden Cisneros</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
              <div className="online" />
              <span>Ismael Terry</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
              />
              <div className="online" />
              <span>Flora Silva</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
