package com.example.demo.board.jinyoung.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.example.demo.board.jinyoung.vo.JYBoardVO;

@Repository
public class JYBoardDAO {

	@Autowired
	@Qualifier("orgSqlSession")
	private SqlSessionTemplate JYsqlsession;

	// 전체 게시글 목록
	public List<JYBoardVO> boardList(Map<String, String> paraMap) {

		List<JYBoardVO> boardList = JYsqlsession.selectList("jinyoung.boardList", paraMap);
		
		return boardList;
	}

	// 글 1개를 조회
	public JYBoardVO getView(String seq) {
		
		JYBoardVO boardvo = JYsqlsession.selectOne("jinyoung.getView", seq);
		
		return boardvo;
	}

	// 조회수 증가
	public int increase_readCount(String seq) {
		
		int n = JYsqlsession.update("jinyoung.increase_readCount", seq);
		
		return n;
	}

	// 글쓰기 요청 완료
	public int addEnd(Map<String, String> paraMap) {
		
		int n = JYsqlsession.insert("jinyoung.addEnd", paraMap);
		
		return n;
	}

	// 글삭제 요청 완료
	public int del(String seq) {

		int n = JYsqlsession.update("jinyoung.del", seq);
		
		return n;
	}

	// 글수정 요청 완료
	public int editEnd(Map<String, String> paraMap) {
		
		int n = JYsqlsession.update("jinyoung.editEnd", paraMap);
		
		return n;
	}

	// 제목 수정
	public int subjectChange(Map<String, String> paraMap) {
		
		int n = JYsqlsession.update("jinyoung.subjectChange", paraMap);
		
		return n;
	}
	
}