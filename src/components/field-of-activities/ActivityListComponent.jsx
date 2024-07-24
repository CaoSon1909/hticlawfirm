import React from "react";
import "./styles.scss";

const ActivityListComponent = () => {
  return (
    <div className="activities-wrapper">
      <div style={{ position: "relative" }}>
        <div className="activity">
          <div className="activity-image">
            <img
              src="/icon/tu-van-phap-ly.svg"
              alt="tu-van-phap-ly"
              width="90"
              height="90"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="activity-paragraph-wrapper">
            <div className="activity-heading">Tư Vấn Pháp Lý</div>
            <div className="activity-paragraph">
              Cung cấp dich vụ pháp lý tư vấn pháp luật, đưa giải pháp áp dụng
              pháp luật vào thực tiễn cho mọi tổ chức, cá nhân có nhu cầu.
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div className="activity">
          <div className="activity-image">
            <img
              className="luat-su-dai-dien"
              src="/icon/luat-su-dai-dien.svg"
              alt="luat-su-dai-dien"
              width="90"
              height="90"
            />
          </div>
          <div className="activity-paragraph-wrapper">
            <div className="activity-heading">Luật Sư Đại Diện</div>
            <div className="activity-paragraph">
              Luật sư đại diện ngoài tố tụng cho khách hàng để giúp khách hàng
              xử lý một công việc có liên quan đến các vấn đề pháp lý.
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div className="activity">
          <div className="activity-image">
            <img
              className="to-tung"
              src="/icon/to-tung.svg"
              alt="to-tung"
              width="90"
              height="90"
            />
          </div>
          <div className="activity-paragraph-wrapper">
            <div className="activity-heading">Tố Tụng</div>
            <div className="activity-paragraph">
              Tham gia đại diện cho khách hàng để bảo vệ quyền và lợi ích hợp
              pháp của khách hàng tại toà án hoặc trung tâm trọng tài.
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div className="activity">
          <div className="activity-image">
            <img
              className="luat-su-rieng"
              src="/icon/luat-su-rieng.svg"
              alt="luat-su-rieng"
              width="90"
              height="90"
            />
          </div>
          <div className="activity-paragraph-wrapper">
            <div className="activity-heading">Luật Sư Riêng</div>
            <div className="activity-paragraph">
              Dịch vụ luật sư tư vấn thường xuyên cho khách hàng. Chúng tôi sẽ
              đồng hành cùng khách hàng trong quá trình hoạt động.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityListComponent;
