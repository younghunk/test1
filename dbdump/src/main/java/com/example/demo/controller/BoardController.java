package com.example.demo.controller;

import com.example.demo.service.BoardService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Controller
public class BoardController {
    Logger logger = LoggerFactory.getLogger(BoardController.class);

    @Autowired
    BoardService boardService;

    //글읽기
    @RequestMapping ("/board/select")
    public ModelAndView selectBoardList(@RequestParam HashMap<String, Object> data) throws Exception{
        logger.debug("/board/select {}", data);
        ModelAndView mv = new ModelAndView("board_select"); //jsp 파일을 가리킴
        System.out.println("보드셀렉"+mv);
        boardService.test();
        return mv;
    }



}

