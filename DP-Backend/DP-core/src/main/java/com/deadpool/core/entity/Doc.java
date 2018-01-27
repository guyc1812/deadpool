package com.deadpool.core.entity;

import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Doc {
    int commit;
    String category;
    String title;
    String path;
    String content;
    String markdown;
}
