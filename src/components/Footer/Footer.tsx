import React from 'react';
import style from './Footer.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function Footer() {
  return (
    <footer className=" bg-gray-100">
      <div className="m-auto w-[1200px] text-gray-500">
        <div className="m-1 flex w-[100%] min-w-[1200px] justify-between">
          <div className={cx('nav-list')}>
            <div className={cx('title-list')}>CHĂM SÓC KHÁCH HÀNG</div>
            <ul>
              <li>
                <Link to={'/developing'}>Trung Tâm Trợ Giúp</Link>
              </li>
              <li>
                <Link to={'/developing'}>Shopee Blog</Link>
              </li>
              <li>
                <Link to={'/developing'}>Shopee Mall</Link>
              </li>
              <li>
                <Link to={'/developing'}>Hướng Dẫn Mua Hàng</Link>
              </li>
              <li>
                <Link to={'/developing'}>Hướng Dẫn Bán Hàng</Link>
              </li>
              <li>
                <Link to={'/developing'}>Thanh Toán</Link>
              </li>
              <li>
                <Link to={'/developing'}>Shopee Xu</Link>
              </li>
              <li>
                <Link to={'/developing'}>Vận Chuyển</Link>
              </li>
              <li>
                <Link to={'/developing'}>Trả Hàng & Hoàn Tiền</Link>
              </li>
              <li>
                <Link to={'/developing'}>Chăm Sóc Khách Hàng</Link>
              </li>
              <li>
                <Link to={'/developing'}>Chính Sách Bảo Hành</Link>
              </li>
            </ul>
          </div>
          <div className={cx('nav-list')}>
            <div className={cx('title-list')}>VỀ SHOPPE</div>
            <ul>
              <li>
                <Link to={'/developing'}>Giới Thiệu Về Shopee Việt Nam</Link>
              </li>
              <li>
                <Link to={'/developing'}>Tuyển Dụng</Link>
              </li>
              <li>
                <Link to={'/developing'}>Điều Khoản Shopee</Link>
              </li>
              <li>
                <Link to={'/developing'}>Chính Sách Bảo Mật</Link>
              </li>
              <li>
                <Link to={'/developing'}>Chính Hãng</Link>
              </li>
              <li>
                <Link to={'/developing'}>Kênh Người Bán</Link>
              </li>
              <li>
                <Link to={'/developing'}>Flash Sales</Link>
              </li>
              <li>
                <Link to={'/developing'}>Chương Trình Tiếp Thị Liên Kết Shopee</Link>
              </li>
              <li>
                <Link to={'/developing'}>Liên Hệ Với Truyền Thông</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <div className={cx('nav-cards')}>
              <div className={cx('title-list')}>THANH TOÁN</div>
              <ul className={cx(' flex flex-wrap')}>
                <li>
                  <img src="/src/assets/Images/visa.png" alt="logo" />
                </li>
                <li>
                  <img src="/src/assets/Images/mastercard.png" alt="logo" />
                </li>
                <li>
                  <img src="/src/assets/Images/fcb.png" alt="logo" />
                </li>
                <li>
                  <img src="/src/assets/Images/american.png" alt="logo" />
                </li>
                <li>
                  <img src="/src/assets/Images/cod.png" alt="logo" />
                </li>
                <li>
                  <img src="/src/assets/Images/tg.png" alt="logo" />
                </li>
                <li>
                  <img src="/src/assets/Images/spay.png" alt="logo" />
                </li>
              </ul>
            </div>
            <div className={cx('nav-cards')}>
              <div className={cx('title-list')}>ĐƠN VỊ VẬN CHUYỂN</div>
              <ul className={cx(' flex flex-wrap')}>
                <li>
                  <img src="/src/assets/Images/ghtk.png" alt="logo" />
                </li>
                <li>
                  <img src="/src/assets/Images/mastercard.png" alt="logo" />
                </li>
                <li>
                  <img src="/src/assets/Images/ghn.jpg" alt="logo" />
                </li>
                <li>
                  <img src="/src/assets/Images/vp.png" alt="logo" />
                </li>
                <li>
                  <img src="/src/assets/Images/vnp.png" alt="logo" />
                </li>
                <li>
                  <img src="/src/assets/Images/j&t.png" alt="logo" />
                </li>
                <li>
                  <img src="/src/assets/Images/grex.png" alt="logo" />
                </li>
                <li>
                  <img src="/src/assets/Images/ninja.png" alt="logo" />
                </li>
                <li>
                  <img src="/src/assets/Images/best.png" alt="logo" />
                </li>
                <li>
                  <img src="/src/assets/Images/be.png" alt="logo" />
                </li>
              </ul>
            </div>
          </div>
          <div className={cx('nav-list')}>
            <div className={cx('title-list')}>VỀ SHOPPE</div>
            <ul>
              <li>
                <Link to={'/developing'} className=" flex flex-row">
                  <img
                    className="mr-2"
                    src="https://down-vn.img.susercontent.com/file/2277b37437aa470fd1c71127c6ff8eb5"
                    alt="Facebook"
                  />
                  <span>Facebook</span>
                </Link>
              </li>
              <li>
                <Link to={'/developing'} className=" flex flex-row">
                  <img
                    className="mr-2"
                    src="https://down-vn.img.susercontent.com/file/5973ebbc642ceee80a504a81203bfb91"
                    alt="Instagram"
                  />
                  <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link to={'/developing'} className=" flex flex-row">
                  <img
                    className="mr-2"
                    src="https://down-vn.img.susercontent.com/file/f4f86f1119712b553992a75493065d9a"
                    alt="LinkedIn"
                  />
                  <span>LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className={cx('nav-list')}>
            <div className={cx('title-list')}>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</div>
            <div className="flex">
              <Link to={'/developing'}>
                <img
                  className={cx('img-qr')}
                  src="https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472"
                  alt="download_qr_code"
                />
              </Link>
              <div className=" w-[76px]">
                <Link to={'/developing'} className={cx('img-app')}>
                  <img src="https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163" alt="app"></img>
                </Link>
                <Link to={'/developing'} className={cx('img-app')}>
                  <img src="https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def" alt="app" />
                </Link>
                <Link to={'/developing'} className={cx('img-app')}>
                  <img src="https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0" alt="app" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between  border-t-[1px] border-[#0000001a] py-10 text-[13px] font-normal">
          <div>© 2023 Shopee. Tất cả các quyền được bảo lưu.</div>
          <div className="flex justify-center">
            <div>Quốc gia & Khu vực:</div>
            <div className={cx('nation')}>
              <Link to={'/developing'}>Singapore</Link>
            </div>
            <div className={cx('nation')}>
              <Link to={'/developing'}>Indonesi</Link>
            </div>
            <div className={cx('nation')}>
              <Link to={'/developing'}>Đài Loan</Link>
            </div>
            <div className={cx('nation')}>
              <Link to={'/developing'}>Thái Lan</Link>
            </div>
            <div className={cx('nation')}>
              <Link to={'/developing'}>Malaysia</Link>
            </div>
            <div className={cx('nation')}>
              <Link to={'/developing'}>Singapore</Link>
            </div>
            <div className={cx('nation')}>
              <Link to={'/developing'}>Việt Nam</Link>
            </div>
            <div className={cx('nation')}>
              <Link to={'/developing'}>Philippines</Link>
            </div>
            <div className={cx('nation')}>
              <Link to={'/developing'}>Brazil</Link>
            </div>
            <div className={cx('nation')}>
              <Link to={'/developing'}>México</Link>
            </div>
            <div className={cx('nation')}>
              <Link to={'/developing'}>Colombia</Link>
            </div>
            <div className={cx('nation')}>
              <Link to={'/developing'}>Chile</Link>
            </div>
          </div>
        </div>

        <div className={cx('nav2')}>
          <div className="mb-10 flex justify-center px-[25px] text-[13px]">
            <div className={cx('nation')}>
              <Link to={'/developing'} className="px-[25px]">
                CHÍNH SÁCH BẢO MẬT
              </Link>
            </div>
            <div className={cx('nation')}>
              <Link to={'/developing'} className="px-[25px]">
                QUY CHẾ HOẠT ĐỘNG
              </Link>
            </div>
            <div className={cx('nation')}>
              <Link to={'/developing'} className="px-[25px]">
                CHÍNH SÁCH VẬN CHUYỂN
              </Link>
            </div>
            <div className={cx('nation')}>
              <Link to={'/developing'} className="px-[25px]">
                CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <Link to={'/developing'}>
              <img className="w-[120px]" src="/src/assets/Images/bocongthuong.png" alt="bocongthuong" />
            </Link>
            <Link to={'/developing'}>
              <img className="mx-8 w-[120px]" src="/src/assets/Images/bocongthuong.png" alt="bocongthuong" />
            </Link>{' '}
            <Link to={'/developing'}>
              <img
                className="w-[68px]"
                src="/src/assets/Images/3ce17addcf90b8cd3952b8ae0ffc1299.png"
                alt="bocongthuong"
              />
            </Link>
          </div>
          <div className="mb-[25px] mt-[25px] text-center text-[12px]">Công ty TNHH Shopee</div>
          <div className="mt-2 text-center text-[12px]">
            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành
            phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
          </div>
          <div className="mt-2 text-center text-[12px]">
            Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)
          </div>
          <div className="mt-2 text-center text-[12px]">
            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch &amp; Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
          </div>
          <div className="mt-2 text-center text-[12px]">© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
