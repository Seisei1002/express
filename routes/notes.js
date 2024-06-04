var express = require('express');
var router = express.Router();

const responseObjectDataAll = {
    textObject1 : {
        id: 1,
        title: 'ノート1のタイトルです',
        subTitle: 'ノート1のサブタイトルです',
        bodyText: 'ノート1の本文です'
    },
    textObject2 : {
        id: 2,
        title: 'ノート2のタイトルです',
        subTitle: 'ノート2のサブタイトルです',
        bodyText: 'ノート2の本文です'
    },
};

/**
 * @returns {Object[]}
 * @returns {number}
 * @returns {string}
 * @returns {string}
 */
router.get('/',function(req,res,next){
    res.json(responseObjectDataAll);
})

module.exports = router;