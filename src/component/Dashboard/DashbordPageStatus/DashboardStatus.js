import React from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
export default function DashboardStatus(pageName) {
  const user = useAuth();
  const { userInfo } = user;
  return (
    <div className="col-md-12 pt-4" style={{ backgroundColor: '#fff' }}>
      <Row>
        <div className="col-md-8 col-8 col-sm-8 pl-5">
          <p>{pageName.pageName.name}</p>
        </div>
        <div className="col-md-4 col-4 col-sm-4 text-right pr-5">
          {userInfo.name.length > 0 ? (
            <p>{userInfo.name}</p>
          ) : (
            <p>Akib (default Name)</p>
          )}
        </div>
      </Row>
    </div>
  );
}
