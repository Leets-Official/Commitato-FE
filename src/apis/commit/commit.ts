import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

export const updateCommit = async () => {
  const accessToken = localStorage.getItem('accessToken');
  //   const accessToken =
  //     'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3b25lZWVlZSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3MjI0ODgwNDJ9.kKjmdT2lJdzH_NwfBPi42ogiE1azGJM6Hu1VQmaXF48jns6r4NgEA3ovHF7E86PAhrevXdwxgr--a7A8FKkixg';
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const res = await axios.post('api/commit/update', {}, { headers });
  if (res.data.isSuccess) {
    return res.data.result;
  }
};
