package com.digitalstore.media.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection="medias")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Media {

    @Id
    private String id;
    private String title;
    private String synopsis;
    private String mainPoster;
    private String altPoster;
    private String country;
    private int purchasePrice;
    private int rentPrice;
    private String releasedDate;
    private List<String> genres;
    private String type;
    private Boolean featured;
}
