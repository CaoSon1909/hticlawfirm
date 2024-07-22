import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import React from "react";
import FooterComponent from "../../footer/FooterComponent";
import "./styles.scss";

const Part2WrapperCard = ({ imgName, h2Text, spanText, para }) => {
  return (
    <div className="part2-wrapper-card">
      <img
        src="/icon/Subtract.svg"
        alt="Subtract"
        width="47"
        height="50"
        style={{ position: "absolute", right: "0", top: "0" }}
      />
      <img
        undefinedhidden="true"
        alt="heart icon"
        src={`/icon/${imgName}.svg`}
      />
      <h3>
        {h2Text}
        <br />
        <span>{spanText}</span>
      </h3>
      <p>{para}</p>
    </div>
  );
};

const TeamsCardItem = ({ imageName, fullName, position }) => {
  return (
    <div className="teams-card-item">
      <img
        className="img"
        src={`/background-image/${imageName}.svg`}
        alt="img-ls"
      />
      <h3 style={{ fontSize: "1em" }}>{fullName}</h3>
      <p>{position}</p>
      <div className="contact-icons">
        <FacebookOutlined />
        <InstagramOutlined />
        <LinkedinOutlined />
      </div>
    </div>
  );
};

const Part2AboutUsPage = () => {
  return (
    <>
      <div className="part2-aboutpage-wrapper">
        <div className="cover-letter">
          <img
            src="/icon/Rectangle-13.svg"
            alt="Rectangle-13"
            width="44"
            height="45"
            style={{ position: "absolute" }}
          />
          <div className="cover-letter-leftside-wrapper">
            <div className="cover-letter-img-wrapper">
              <img
                className="cover-letter-img"
                src="/icon/boss.svg"
                alt="Profile picture of Luật sư Trần Quốc Hưng"
              />
            </div>
            <div className="cover-letter-fullname">
              <h2 className="cover-letter-fullname-h2">
                Luật sư Trần Quốc Hưng
              </h2>
              <p>Giám Đốc Điều Hành</p>
            </div>
          </div>

          <div className="cover-letter-rightside-wrapper">
            <div>
              <blockquote className="block-quote">
                <p className="quote">“ĐÚNG THỜI CHƯA ĐỦ – MÀ CÒN PHẢI TỐT”</p>
                <p className="sub-quote">
                  Chúng tôi luôn đưa ra giải pháp tối ưu cho mọi vấn đề
                </p>
              </blockquote>
            </div>
            <div>
              <h3 className="thu-ngo-h3">THƯ NGỎ</h3>
              <div
                style={{
                  color: "#090909",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                KÍNH GỬI: QUÝ KHÁCH HÀNG!
              </div>
              <p style={{ marginTop: "1rem", marginRight: "27px" }}>
                HTIC là công ty luật được thành lập từ năm 2011 (tiền thân là
                công ty Luật Pháp Chính), hiện nay HTICLAW là một tổ chức hành
                nghề luật sư uy tín được nhiều khách hàng tại Việt Nam tin cậy.
                Chúng tôi luôn từng bước cố gắng để khẳng định chất lượng trên
                thị trường trong và ngoài nước. Với nỗ lực không ngừng, chúng
                tôi đã được sự tín nhiệm từ các đối tác lớn cùng nhiều tổ chức
                lớn nhỏ khác thông qua các hoạt động tư vấn pháp lý, cung cấp
                giải pháp và tháo gỡ các khó khăn, vướng mắc của doanh nghiệp.
              </p>
              <p style={{ marginTop: "1rem", marginRight: "27px" }}>
                Sứ mệnh HTIC là phục sự công lý – bảo vệ lợi ích khách hàng, và
                trở thành một chỗ dựa cho các tổ chức, cá nhân khi cần luật sư.
                Với đội ngũ nhân sự có kinh nghiệm, nắm vững quy định pháp lý,
                am hiểu nhiều lĩnh vực, HTIC tự tin cung cấp cho khách hàng các
                dịch vụ tư vấn pháp lý toàn diện với chất lượng cao và thỏa mãn
                những yêu cầu khắt khe nhất.
              </p>
              <p style={{ marginTop: "1rem", marginRight: "27px" }}>
                Trong mỗi vụ việc, HTIC không đơn giản chỉ cung cấp thông tin
                pháp lý mà còn có giải pháp để khách hàng có sự lựa chọn tốt,
                phù hợp nhất. Với năng lực nội tại, HTIC luôn muốn được phục vụ
                nhiều khách hàng và từng bước phấn đấu để trở thành tổ chức luật
                hàng đầu tại Việt Nam. Để làm được điều này chúng tôi rất mong
                muốn nhận được sự ủng hộ của quý khách hàng, đối tác.
              </p>
              <p style={{ marginTop: "1rem", marginRight: "27px" }}>
                Vậy nên với thư ngỏ này, chúng tôi rất rất mong muốn được hợp
                tác.
              </p>
              <p style={{ marginTop: "1rem", marginRight: "27px" }}>
                Chân thành cảm ơn và trân trọng!
              </p>
              <p
                style={{
                  marginTop: "1rem",
                  marginRight: "27px",
                  marginBottom: "40px",
                }}
              >
                <strong>Luật sư Trần Quốc Hưng</strong>
                <br />
                Giám Đốc Điều Hành
              </p>
            </div>
          </div>
        </div>
        <div className="vision-mission">
          <img
            src="/icon/Rectangle-13.svg"
            alt="Rectangle-13"
            width="44"
            height="45"
            style={{ position: "absolute" }}
          />
          <div className="vision-mission-heading">
            Tầm Nhìn Và Sứ Mệnh Của Chúng Tôi
          </div>
          <div className="part1-wrapper">
            <div className="card">
              <div className="card-img">
                <img
                  aria-hidden="true"
                  alt="target"
                  src="/icon/tam-nhin-icon.svg"
                  style={{
                    width: "120px",
                  }}
                />
                <h3>Tầm Nhìn</h3>
              </div>
              <div
                style={{
                  borderLeft: "3px solid #EBEBEB",
                  height: "150px",
                }}
              ></div>
              <div>
                <p>
                  TRỞ THÀNH MỘT TỔ CHỨC HÀNH NGHỀ LUẬT SƯ HÀNG ĐẦU TẠI VIỆT NAM.
                </p>
                <p>
                  Tạo dựng hình ảnh luật sư có tâm, có giá trị là chỗ dựa cho
                  mọi tổ chức, cá nhân có nhu cầu cần đến sự hỗ trợ pháp lý.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <img
                  aria-hidden="true"
                  alt="target"
                  src="/icon/su-menh-icon.svg"
                  style={{
                    width: "120px",
                  }}
                />
                <h3>Sứ Mệnh</h3>
              </div>
              <div
                style={{
                  borderLeft: "3px solid #EBEBEB",
                  height: "150px",
                }}
              ></div>
              <div>
                <p>CHÚNG TÔI LẤY SỨ MỆNH:</p>
                <p>“PHỤNG SỰ CÔNG LÝ - BẢO VỆ LỢI ÍCH KHÁCH HÀNG.”</p>
                <p>
                  Làm sự định hướng, Kim chỉ nam cho hành động của đội ngũ HTIC.
                </p>
              </div>
            </div>
          </div>
          <div className="vision-mission-heading">
            Giá Trị Cốt Lõi Của Chúng Tôi
          </div>
          <div className="core-value-quote">
            <blockquote className="block-quote">
              <p className="quote">
                “HONESTY - TRUST - INTEGRITY - CAREFULLNESS”
              </p>
              <p className="sub-quote">
                Cũng chính là slogan của <strong>HTIC LAW FIRM</strong>
              </p>
            </blockquote>
          </div>
          <div className="part2-wrapper">
            <Part2WrapperCard
              imgName={"honesty"}
              h2Text={"Sự Trung Thực"}
              spanText={"(Honesty)"}
              para={
                "Tạo dựng hình ảnh luật sư có tâm, có tâm, có giá trị là chỗ dựa cho mọi tổ chức, cá nhân có nhu cầu cần đến sự hỗ trợ pháp lý."
              }
            />
            <Part2WrapperCard
              imgName={"trust"}
              h2Text={"Sự Tin Cậy"}
              spanText={"(Trust)"}
              para={
                "Để đạt được sự tin cậy, tín nhiệm từ khách hàng là mục đích mà mỗi thành viên của HTIC luôn nỗ lực hướng tới. Chúng tôi phải luôn cố gắng để hoàn thiện bản thân, trau dồi kiến thức và kinh nghiệm, nhằm hướng tới..."
              }
            />
            <Part2WrapperCard
              imgName={"integrity"}
              h2Text={"Sự Chính Trực"}
              spanText={"(Integrity)"}
              para={
                "Là luật sư yếu tố chính trực luôn đứng hàng đầu, chúng tôi đưa ra tiêu chí này để khẳng định với khách hàng rằng sẽ ”KHÔNG BAO GIỜ VÌ MỘT CÁM DỖ NÀO KHÁC MÀ ĐI LẠI LỢI ÍCH CỦA KHÁCH HÀNG.”"
              }
            />
            <Part2WrapperCard
              imgName={"carefulness"}
              h2Text={"Sự Cẩn Trọng"}
              spanText={"(Carefulness)"}
              para={
                "Đây là giá trị bên trong của mỗi cá nhân người luật sư và nhân viên HTIC. Chúng tôi đưa ra sự cẩn trọng để đảm bảo với khách hàng rằng mỗi lời tư vấn & giải pháp chúng tôi đưa ra đều được chắt lọc kỹ lưỡng để mang lại..."
              }
            />
          </div>
        </div>
        <div className="teams">
          <div className="teams-heading">Đội Ngũ Luật Sư</div>
          <div className="teams-wrapper">
            <img
              className="background-image-9"
              src="/background-image/bg-image-part9.svg"
              alt="nine-image"
            />
            <div className="teams-card-wrapper">
              <TeamsCardItem
                imageName="teams-tranquochung"
                fullName="LS. Trần Quốc Hưng"
                position="Luật sư Điều hành"
              />
              <TeamsCardItem
                imageName="teams-hoanggiangtulang"
                fullName="LS. Hoàng Giang Tử Lăng"
                position="Luật sư Sáng lập"
              />
              <TeamsCardItem
                imageName="teams-duonganhkhoa"
                fullName="LS. Dương Anh Khoa"
                position="Luật sư Tố tụng"
              />
              <TeamsCardItem
                imageName="teams-dongquocduy"
                fullName="LS. Đổng Quốc Duy"
                position="Luật sư Tư vấn Doanh nghiệp"
              />
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Part2AboutUsPage;
