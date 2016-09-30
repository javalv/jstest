
    function getNextSequence(name) {
        var ret = db.globalId.findAndModify(
            {
                query: { _id: name },
                update: { $inc: { cid: new NumberLong(1) } }
            }
        );
        return ret.cid;
    }
    var firstId = 600000;
    function getNewEncrycode(encrycode, sysId) {
        var arrs = encrycode.split("|");
        return arrs[0] + "|" + sysId + "|" + arrs[2] + "|" + arrs[3];

    }

    function updateEncrycode(id, newEncrycode, sysId) {
        db.voucher.update(
            {
                _id: id
            },
            {
                $set: {
                    encrycode: newEncrycode,
                    sysId: sysId,
                    updateid:getNextSequence("updateid")
                }
            },
            false, false
        )
    }

    function excuteOne(citys, sysId ) {
        db.voucher.find({
            '_id': {
                $gt: firstId
            },
            'group.city': {
                $in: citys
            },
            'sysId':'1'
        }).forEach(function (doc) {

            var encrycode = doc.encrycode;
            if (typeof encrycode == 'undefined' || encrycode == null) {
                return;
            }

            var temp = encrycode.split('|');
            if (!temp || temp.length != 4) {
                print('error length: ' + doc._id);
                return;
            }

            var id = doc._id;
            //var newEncrycode = getNewEncrycode(encrycode, sysId);
            //updateEncrycode(id, newEncrycode, sysId);

            print("complete " + doc._id);

        });
    }

    excuteOne(['1580','872','1038','2520','702','1597','2574','2528','2536',
        '2544','2551','2556','2561','2582','2593','2603','2609','2615',
        '2623','2628','2633','2642','1087','1052','1063','1077','1103',
        '1116','1125','1137','1148','1158','1169','1175','1612','1626',
        '1637','1643','1653','1667','1675','1691','1680','1959','465',
        '476','482','496','499','504','525','539','553','565','580','712',
        '717','727','739','752','764','770','776','786','793','806','819','829'],
        '2');

    excuteOne(['893','906','923','917','913','919','937','947','949','956','962','968',
        '977','986','993','999','1004','1015','1023','1028','2048',
        '2053','2066','2074','2079','2086','2098','2103','2121',
        '2126','2133','2141','848','1190','1192','1193','1194',
        '1195','1196','1197','1198','1199','1200','1201','1202',
        '1203','1204','1205','1206','1207','850','2911','2922','2934',
        '2953','2969','840','841','842','843','844','845','846',
        '3544','3545','3546','3547','3548','3549','3550','3551',
        '3552','3553','3554','3555','3556','3557','3558','3559',
        '90','95','99','112','116','117','118','132','133','143',
        '144','149','168','172','183','191'],
        '3');


