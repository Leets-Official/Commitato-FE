import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);
  const [allUserData, setAllUserData] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userExp, setUserExp] = useState(0);
  const [userTierName, setUserTierName] = useState('');
  const [userCharacterUrl, setUserCharacterUrl] = useState('');
  const [userConsecutiveCommitDays, setUserConsecutiveCommitDays] = useState(0);
  const [userTotalCommitCount, setUserTotalCommitCount] = useState(0);
  const [userTodayCommitCount, setUserTodayCommitCount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        userData,
        setUserData,
        allUserData,
        setAllUserData,
        userName,
        setUserName,
        userExp,
        setUserExp,
        userTierName,
        setUserTierName,
        userCharacterUrl,
        setUserCharacterUrl,
        userConsecutiveCommitDays,
        setUserConsecutiveCommitDays,
        userTotalCommitCount,
        setUserTotalCommitCount,
        userTodayCommitCount,
        setUserTodayCommitCount,
        error,
        setError,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
