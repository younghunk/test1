package com.example.demo.board.vo;

import lombok.Setter;

public class PageVo {

    public PageVo(int page, int dataPerPage, int pageBlock, int postCount) {
        this.page = page;
        this.dataPerPage = dataPerPage;
        this.pageBlock = pageBlock;
        this.postCount = postCount;

        int offset = (page - 1) * dataPerPage;
        int maxPage = (int) Math.ceil((double) postCount / dataPerPage);
        int startBlock = ( (page - 1) / pageBlock ) * pageBlock +1;
        int endBlock = startBlock + pageBlock -1;
        if(endBlock > maxPage) {
            endBlock = maxPage;
        }

        this.offset = offset;
        this.maxPage = maxPage;
        this.startBlock = startBlock;
        this.endBlock = endBlock;
    }

    public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getDataPerPage() {
		return dataPerPage;
	}

	public void setDataPerPage(int dataPerPage) {
		this.dataPerPage = dataPerPage;
	}

	public int getPageBlock() {
		return pageBlock;
	}

	public void setPageBlock(int pageBlock) {
		this.pageBlock = pageBlock;
	}

	public int getPostCount() {
		return postCount;
	}

	public void setPostCount(int postCount) {
		this.postCount = postCount;
	}

	public int getOffset() {
		return offset;
	}

	public void setOffset(int offset) {
		this.offset = offset;
	}

	public int getMaxPage() {
		return maxPage;
	}

	public void setMaxPage(int maxPage) {
		this.maxPage = maxPage;
	}

	public int getStartBlock() {
		return startBlock;
	}

	public void setStartBlock(int startBlock) {
		this.startBlock = startBlock;
	}

	public int getEndBlock() {
		return endBlock;
	}

	public void setEndBlock(int endBlock) {
		this.endBlock = endBlock;
	}

	public String getSearchValue() {
		return searchValue;
	}

	public void setSearchValue(String searchValue) {
		this.searchValue = searchValue;
	}

	private int page;           // 현재 페이지 번호
    private int dataPerPage;    // 페이지 당 출력할 데이터 개수
    private int pageBlock;      // 화면 하단에 출력할 페이지 사이즈
    private int postCount;      //게시글 수

    private int offset;     //페이지 시작 글번호 (간격)
    private int maxPage;    //최대 페이지

    private int startBlock; //페이지 블럭 시작 번호
    private int endBlock;   //페이지 블럭 끝 번호
    
    private String searchValue; //검색 값

}