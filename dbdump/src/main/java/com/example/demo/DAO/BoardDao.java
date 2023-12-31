package com.example.demo.DAO;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
public class BoardDao {

    Logger logger = LoggerFactory.getLogger(BoardDao.class);

    private static final String BoardMapper = "BoardMapper";

    @Autowired
    @Qualifier(value = "apSqlSession")
    private SqlSession apSqlSession;

    @Autowired
    @Qualifier(value = "batchSqlSession2")
    private SqlSession batchSqlSession2;

    public List<HashMap<String, Object>> alpha2select() {
        return apSqlSession.selectList(BoardMapper+".alpha2select");
    }

    public void alpha1insert(HashMap<String, Object> item) {
        batchSqlSession2.insert(BoardMapper+".alpha1insert", item);
    }
}
