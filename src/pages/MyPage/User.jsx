import React, { useState, useEffect, useContext, lazy } from 'react';
import axios from 'axios';
import { UserContext } from '../../apis/UserContext';

const User = () => {
  const {
    userId,
    setUserId,
    setUserName,
    setUserExp,
    setUserTierName,
    setUserCharacterUrl,
    setUserConsecutiveCommitDays,
    setUserTotalCommitCount,
    setUserTodayCommitCount,
    error,
    setError,
    setLoading,
  } = useContext(UserContext);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) {
        console.log('No user ID, skipping fetchUserData');
        setLoading(false);
        return;
      }
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        setError('Access token is missing');
        setLoading(false);
        return;
      }

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      setLoading(true);
      setError(null);

      try {
        console.log('Fetching commit data for user ID:', userId);
        const postResponse = await axios.post(
          '/api/commit/update',
          {},
          { headers },
        );

        console.log('Post response: ', postResponse.data);

        console.log('Fetching user data for ID:', userId);

        const response = await axios.get('/api/user/' + userId, { headers });

        const data = response.data;
        console.log('User data response:', data); // 응답 데이터 확인
        if (data.isSuccess) {
          setUserName(data.result.username);
          setUserExp(data.result.userExp);
          setUserTierName(data.result.userTierName);
          setUserCharacterUrl(data.result.userCharacterUrl);
          setUserConsecutiveCommitDays(data.result.userConsecutiveCommitDays);
          setUserTodayCommitCount(data.result.userTodayCommitCount);
          setUserTotalCommitCount(data.result.userTotalCommitCount);

          console.log(
            'Updated values:',
            data.result.githubId,
            data.result.exp,
            data.result.tierName,
            data.result.characterUrl,
            data.result.consecutiveCommitDays,
            data.result.todayCommitCount,
            data.result.totalCommitCount,
          );
        } else {
          setError(`Server error: ${data.message}`);
        }
      } catch (e) {
        console.error('Error fetching user data:', e.message); // 에러 메시지 확인
        setError(`Error fetching user data: ${e.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [
    userId,
    setUserId,
    setUserName,
    setUserExp,
    setUserTierName,
    setUserCharacterUrl,
    setUserConsecutiveCommitDays,
    setUserTodayCommitCount,
    setUserTotalCommitCount,
    error,
    setError,
    setLoading,
  ]);

  return null;
};

export default User;
