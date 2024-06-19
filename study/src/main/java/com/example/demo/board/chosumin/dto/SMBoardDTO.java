package com.example.demo.board.chosumin.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SMBoardDTO {

    private int seq;
    private String userid;
    private String subject;
    private String content;
    private int readCount;
    private String regDate;
    private int status;
    private int commentCount;
    private String date;

    private int groupno;
    private int fk_seq;
    private int depthno;
}