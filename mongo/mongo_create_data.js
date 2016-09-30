function create(_id,mid,uid){

    initUser(_id,mid,uid);

    var sysId = "1";
    var vid = "12829218";
    execute(10000,uid,mid,sysId,vid);
}

function initGlobal(){
    var items =[
        {
            "_id" : "updateid",
            "cid" : NumberLong(1),
            "cname" : "updateid"
        },
        {
            "_id" : "voucher",
            "cname" : "voucher",
            "cid" : NumberLong(1)
        },
    ]

    items.forEach(function(o,index){
        db.globalId.insert(o);
    })

}

function initUser(_id,mid,uid){
    var user = {
        "_id" : _id,
        "_class" : "cn.damai.voucher.service.core.spring.po.UserInfoPo",
        "uid" : uid,
        "mid" : mid,
        "name" : "45997014",
        "nname" : "9999EFmgbU",
        "mobile" : "13299999999",
        "phone" : "13299999999",
        "pic" : "http://perico.damai.cn/UserHeadPhotos/229985/45997014_150_150.jpg"
    }

    db.user.insert(user);
}

function initBinding(){
    var items =[{
        "_id" : "1-45711016",
        "_class" : "cn.damai.voucher.service.core.spring.po.UserBindingPo",
        "userAId" : NumberLong(1),
        "userBId" : NumberLong(10),
        "mtime" : ISODate("2016-09-29T19:52:43.876+0800"),
        "ctime" : ISODate("2016-09-29T19:52:43.876+0800"),
        "userA" : DBRef("user", NumberLong(1)),
        "userB" : DBRef("user", NumberLong(10))
    },
    {
        "_id" : "101-36421",
        "_class" : "cn.damai.voucher.service.core.spring.po.UserBindingPo",
        "userAId" : NumberLong(1),
        "userBId" : NumberLong(10),
        "mtime" : ISODate("2016-09-29T19:52:43.893+0800"),
        "ctime" : ISODate("2016-09-29T19:52:43.893+0800"),
        "userA" : DBRef("user", NumberLong(1)),
        "userB" : DBRef("user", NumberLong(10))
    }];
    items.forEach(function(o,index){
        db.binding.insert(o);
    })
}

function initGroup(){
    var g = {
        "_id" : NumberLong(12133),
        "_class" : "cn.damai.voucher.service.core.spring.po.VoucherGroupPo",
        "gid" : "30007460",
        "mid" : "1",
        "name" : "票乎--本地化---01 乐视体育生态中心 2017年03月01",
        "num" : NumberInt(1),
        "lid" : "682",
        "location" : "乐视体育生态中心",
        "province" : "851",
        "city" : "852",
        "cdate" : ISODate("2016-09-28T14:40:39.170+0800"),
        "edate" : ISODate("2017-03-01T22:00:00.000+0800"),
        "stime" : ISODate("2017-03-01T19:30:00.000+0800"),
        "interval" : NumberInt(720),
        "cert" : {
        "pubkey" : "84200298764468548030777386628238071516414121470485177110561029053412542006289|65537",
            "priKey" : "84200298764468548030777386628238071516414121470485177110561029053412542006289|40889248950638204520004289284378364344765040753855979686994934931855340072161"
        },
        "pid" : "204152",
        "pname" : "票乎--本地化---01",
        "allow" : NumberInt(0)
    }

    db.vouchergroup.insert(g);
}

function getNextSequence(name) {
        var ret = db.globalId.findAndModify(
            {
                query: { _id: name },
                update: { $inc: { cid: new NumberLong(1) } }
            }
        );
        return ret.cid;
    }


    function insert(obj,uid,mid,sysId,vid){
        var o = obj;
        o["_id"] = getNextSequence("voucher");
        o["updateid"] = getNextSequence("updateid");

        o["uid"] = uid;
        o["mid"] = mid,
        o["sysId"] = sysId,
        o["vid"] = vid;

        db.voucher.insert(o);

    }


    function execute(num,uid,mid,sysId,vid){

        var obj = {
            "_class" : "cn.damai.voucher.service.core.spring.po.VoucherPo",
            "cdate" : ISODate("2016-09-01T15:19:00.531+0800"),
            "check" : "T1cntYoa",
            "code" : "12796168",
            "cs" : NumberInt(0),
            "df" : NumberInt(0),
            "edate" : ISODate("2018-08-08T22:00:00.000+0800"),
            "encrycode" : "b8BVnpJGUWdicoRC8A6PXw==|1.1.0|1|2|BgZ26Z",
            "es" : NumberInt(0),
            "floor" : "首层看台",
            "gid" : "12133",
            "group" : {
                "_id" : NumberLong(12133),
                "gid" : "30000376",
                "mid" : "1",
                "name" : "yue-选座项目 万事达中心（原五棵松体育馆） 2018年08月08",
                "num" : NumberInt(10),
                "lid" : "682",
                "location" : "万事达中心（原五棵松体育馆）",
                "province" : "851",
                "city" : "852",
                "cdate" : ISODate("2016-09-01T15:13:57.936+0800"),
                "edate" : ISODate("2018-08-08T22:00:00.000+0800"),
                "stime" : ISODate("2018-08-08T19:30:00.000+0800"),
                "interval" : NumberInt(720),
                "cert" : {
                    "pubkey" : "78793387452009397878199129810464685779711391809630232003321462337963770221967|65537",
                    "priKey" : "78793387452009397878199129810464685779711391809630232003321462337963770221967|26478867895128781892205283045389234166956560307225858689385603281283959499713"
                },
                "pid" : "200019",
                "pname" : "yue-选座项目",
                "allow" : NumberInt(0)
            },
            "isread" : true,
            "mtime" : ISODate("2016-09-13T17:02:10.785+0800"),
            "name" : "yue-选座项目",
            "odate" : ISODate("2016-09-01T10:56:36.070+0800"),
            "pic" : "http://pimg.damai.cn/perform/project/2000/200019_n_171_214.jpg",
            "pid" : "1",
            "price" : "1.000",
            "priceId" : "310000013",
            "rno" : "9",
            "sdate" : ISODate("2018-08-08T19:30:00.000+0800"),
            "seat" : "8号门 114(L)通道 首层看台层 9排 1座",
            "seatId" : "371489879",
            "show" : {
                "datas" : {
                    "ticket_price" : "1",
                    "seat_area" : "8号门 114(L)通道",
                    "venue_name" : "万事达中心（原五棵松体育馆）",
                    "seat_desc" : "首层看台层 9排 1座"
                }
            },
            "showgid" : "1313486760",
            "sno" : "1",
            "stand" : "8号门 114(L)通道",
            "ts" : NumberInt(0),
            "tvs" : NumberLong(1473757329150),
            "vname" : "万事达中心（原五棵松体育馆）",
            "vs" : NumberInt(0),
            "vtype" : NumberInt(1)
        }

        for(var i=0;i<num;i++){
            insert(obj,uid,mid,sysId,vid);
        }


    }
initGlobal();
initGroup();

var mid = "1";
var uid = "45711016";
create(NumberLong(1),mid,uid);
var mid = "101";
var uid = "36421";
create(NumberLong(10),mid,uid);

initBinding();