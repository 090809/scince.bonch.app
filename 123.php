<?php
/**
 * Created by PhpStorm.
 * User: darkm
 * Date: 13.09.2017
 * Time: 16:29
 */

$json_string = '[
    {
        "products":
        [
            {
                "product_name":"Барьер-ограничитель для кроватей Tomy (Томи)",
                "product_id":"19",
                "old_price":"3440.0000",
                "new_price":"3440.0000",
                "quantity":1,
                "option":""
            },
            {
                "product_id":"11928",
                "product_name":"Кроватка - люлька Italbaby Ninna Nanna",
                "old_price":"39510.0000",
                "quantity":"1",
                "new_price":"38510.0000",
                "use_option":"on"}
        ],
        "old_summ":42950,
        "new_summ":41950
    }
]';

$json_obj = json_decode($json_string);
var_dump($json_obj);