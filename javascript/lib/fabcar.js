/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FabCar extends Contract {

    /*async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const user = [
            {
                userID: 'DVA',
                name: 'Do Van An',
                Phone: '0931910JQK',
                certification: 'mau giao',
                position: 'lao cong',
                dept: 'BGD',
                password: '6868',
                command_history: [
                    {'userID': 'LTA', 'username': 'Le Thi Anh', 'docType': 'private_message'},
                ]
            },
            {
                userID: 'LTA',
                name: 'Le Thi Anh',
                Phone: '0931910JQK',
                certification: 'Tien Si Xau Xa',
                position: 'Pho Phong',
                dept: 'CCTC',
                password: '6868',
                command_recv_history: [
                    {'userID': 'DVA', 'username': 'Do Van An', 'docType': 'private_message'},
                ]
            },
            {
                userID: 'TVT',
                name: 'Tong Viet Trung',
                Phone: '0931910JQK',
                certification: 'Tien Si Xau Xa',
                position: 'Pho Tu Lenh',
                dept: 'BTL',
                password: '6868',
                command_recv_history: []
            },
            {
                userID: 'DTC',
                name: 'Dinh The Cuong',
                Phone: '0931910JQK',
                certification: 'Tien Si Xau Xa',
                position: 'Tu Lenh',
                dept: 'BTL',
                password: '6868',
                command_recv_history: []
            },
        ]

        const message = [
			{
				messID: 001,
				sender: 'DVA',
				receiver: 'LTA',
				content: 'OK',
				timestamp: 1
			},
			{
				messID: 002,
				sender: 'LTA',
				receiver: 'DVA',
				content: 'NG',
				timestamp: 2
			},
			{
				messID: 003,
				sender: 'TVT',
				receiver: 'LTA',
				content: 'hehe',
				timestamp: 3
			},
			{
				messID: 004,
				sender: 'DVA',
				receiver: 'LTA',
				content: 'grzzz',
				timestamp: 4
			},
			{
				messID: 005,
				sender: 'LTA',
				receiver: 'DTC',
				content: 'vcl',
				timestamp: 5
			},
		]
        const cars = [
            {
                color: 'blue',
                make: 'Toyota',
                model: 'Prius',
                owner: 'Tomoko',
            },
            {
                color: 'red',
                make: 'Ford',
                model: 'Mustang',
                owner: 'Brad',
            },
            {
                color: 'green',
                make: 'Hyundai',
                model: 'Tucson',
                owner: 'Jin Soo',
            },
            {
                color: 'yellow',
                make: 'Volkswagen',
                model: 'Passat',
                owner: 'Max',
            },
            {
                color: 'black',
                make: 'Tesla',
                model: 'S',
                owner: 'Adriana',
            },
            {
                color: 'purple',
                make: 'Peugeot',
                model: '205',
                owner: 'Michel',
            },
            {
                color: 'white',
                make: 'Chery',
                model: 'S22L',
                owner: 'Aarav',
            },
            {
                color: 'violet',
                make: 'Fiat',
                model: 'Punto',
                owner: 'Pari',
            },
            {
                color: 'indigo',
                make: 'Tata',
                model: 'Nano',
                owner: 'Valeria',
            },
            {
                color: 'brown',
                make: 'Holden',
                model: 'Barina',
                owner: 'Shotaro',
            },
        ];

        for(let i = 0; i < cars.length; i++) {
            cars[i].docType = 'car';
            await ctx.stub.putState('CAR' + i, Buffer.from(JSON.stringify(cars[i])));
            console.info('Added <--> ', cars[i]);
        }
        
        for(let j=0; j<message.length; j++)
        {
            message[j].docType = 'private_message';
            await ctx.stub.putState(message[j]['messID'], Buffer.from(JSON.stringify(message[j])));
            console.info('ADD:', message[j]);
        }

        for(let ii=0; ii<user.length; ii++)
        {
            user[ii].docType = 'user';
            await ctx.stub.putState(user[ii]['userID'], Buffer.from(JSON.stringify(user[ii])));
            console.info('ADD: ', user[ii]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }*/
    
    async initLedger(ctx)
    {
        const user = [
            {
                userID: 'DVA',
                name: 'ADMIN',
                Phone: '0931910JQK',
                certification: 'THPT',
                position: 'admin',
                dept: 'BGD',
                password: '6868',
                command_recv_history: [
                    {'userID': 'LTA', 'username': 'Lo Thi A', 'docType': 'private_message'},
                    {'userID': 'BTC', 'username': 'Bui Thi C', 'docType': 'private_message'},
                ]
            },
            {
                userID: 'LTA',
                name: 'Lo Thi A',
                Phone: '0931910JQK',
                certification: 'Dai Hoc',
                position: 'Pho Phong',
                dept: 'CCTC',
                password: '6868',
                command_recv_history: [
                    {'userID': 'DVA', 'username': 'ADMIN', 'docType': 'private_message'},
                    {'userID': 'DTC', 'username': 'Dao Thi C', 'docType': 'private_message'},
                    {'userID': 'TVT', 'username': 'Tran Viet T', 'docType': 'private_message'},
                ]
            },
            {
                userID: 'TVT',
                name: 'Tran Viet T',
                Phone: '0931910JQK',
                certification: 'Tien Si',
                position: 'Truong Phong',
                dept: 'BTL',
                password: '6868',
                command_recv_history: [
                    {'userID': 'LTA', 'username': 'Lo Thi A', 'docType': 'private_message'},
                    {'userID': 'DTC', 'username': 'Dao Thi C', 'docType': 'private_message'},
                ]
            },
            {
                userID: 'DTC',
                name: 'Dao Thi C',
                Phone: '0931910JQK',
                certification: 'Dai Hoc',
                position: 'Nhan Vien',
                dept: 'BTL',
                password: '6868',
                command_recv_history: [
                    {'userID': 'LTA', 'username': 'Lo Thi A', 'docType': 'private_message'},
                    {'userID': 'TVT', 'username': 'Tran Viet T', 'docType': 'private_message'},
                ]
            },
            {
                userID: 'BTC',
                name: 'Bui Thi C',
                Phone: '0931910JQK',
                certification: 'THCS',
                position: 'Giam Doc',
                dept: 'BTL',
                password: '6868',
                command_recv_history: [
                    {'userID': 'DVA', 'username': 'ADMIN', 'docType': 'private_message'},
                ]
            },
            {
                userID: 'NVB',
                name: 'Nguyen Van B',
                Phone: '0931910JQK',
                certification: 'THPT',
                position: 'Pho Giam Doc',
                dept: 'BTL',
                password: '6868',
                command_recv_history: [
                    
                ]
            },
        ];

        for(let ii=0; ii<user.length; ii++)
        {
            user[ii].docType = 'user';
            await ctx.stub.putState(user[ii]['userID'], Buffer.from(JSON.stringify(user[ii])));
            console.info('ADD: ', user[ii]);
        }
    }

    /*async initMess(ctx)
    {
        const message = [
			{
				messID: 001,
				sender: 'DVA',
                sender_name: 'Do Van An',
                docType: 'private_message',
				receiver: 'LTA',
				content: 'OK',
				timestamp: 1
			},
			{
				messID: 002,
				sender: 'LTA',
                sender_name: 'Le Thi Anh',
                docType: 'private_message',
				receiver: 'DVA',
				content: 'NG',
				timestamp: 2
			},
			{
				messID: 003,
				sender: 'TVT',
                sender_name: 'Tong Viet Trung',
                docType: 'private_message',
				receiver: 'LTA',
				content: 'hehe',
				timestamp: 3
			},
			{
				messID: 004,
				sender: 'DVA',
                sender_name: 'Do Van An',
                docType: 'private_message',
				receiver: 'LTA',
				content: 'grzzz',
				timestamp: 4
			},
			{
				messID: 005,
				sender: 'LTA',
                sender_name: 'Le Thi Anh',
                docType: 'private_message',
				receiver: 'DTC',
				content: 'vcl',
				timestamp: 5
			},
            {
				messID: 006,
				sender: 'DTC',
                sender_name: 'Dinh The Cuong',
                docType: 'private_message',
				receiver: 'TVT',
				content: 'ahihi',
				timestamp: 6
			},
            {
				messID: 007,
				sender: 'BTC',
                sender_name: 'Bitcoin',
                docType: 'private_message',
				receiver: 'DVA',
				content: 'con ga',
				timestamp: 7
			},
		];

        for(let j=0; j<message.length; j++)
        {
            message[j].docType = 'private_message';
            await ctx.stub.putState(message[j]['messID'], Buffer.from(JSON.stringify(message[j])));
            console.info('ADD:', message[j]);
        }
    }*/

    async queryCar(ctx, carNumber) {
        const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
        if (!carAsBytes || carAsBytes.length === 0) {
            throw new Error(`${carNumber} does not exist`);
        }
        console.log(carAsBytes.toString());
        return carAsBytes.toString();
    }

    async authentication(ctx, userID, password)
    {
        //code
        const query_authen={
            "selector":{"userID":userID, "password":password, "docType":"user"}
        };
        const result = await this.queryCustom(ctx, JSON.stringify(query_authen));
        if(JSON.parse(result.toString()).length>0)
        {
            var user = JSON.parse(result.toString());
            var username = user[0].Record.name;
            return(username);
        }
        else if(!result || JSON.parse(result.toString()).length==0)
        {
            return(false);
        }
    }
    
    async queryUser(ctx, userID){
        const userAsBytes = await ctx.stub.getState(userID);
        if(!userAsBytes || userAsBytes.length === 0)
        {
            throw new Error(`${userAsBytes} does not exist`);
        }
        console.log(userAsBytes.toString());
        return userAsBytes.toString();
    }

    async updateCommandHistory(ctx, userID, partnerID, docType)
    {
        function array_move(arr, old_index, new_index) {
            if (new_index >= arr.length) {
                var k = new_index - arr.length + 1;
                while (k--) {
                    arr.push(undefined);
                }
            }
            arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
            return arr; // for production
        };
        if(docType=='private_message')
        {
            const userAsBytes = await ctx.stub.getState(userID);
            const user_json = JSON.parse(userAsBytes.toString());
            const prtnerAsBytes = await ctx.stub.getState(partnerID);
            const prtJson = JSON.parse(prtnerAsBytes.toString());
            var prtner_name = prtJson.name;
            var flag =0; var index;
            for(let i in user_json.command_recv_history)
            {
                if(user_json.command_recv_history[i]['userID']==partnerID)
                {
                    flag=1;
                    index=i;
                }
            }
            if(flag==0)
            {
                var cmd_hist = user_json.command_recv_history;
                cmd_hist.unshift({'userID': partnerID, 'username': prtner_name, 'docType':'private_message'});
                user_json.command_recv_history = cmd_hist;
                await ctx.stub.putState(userID, Buffer.from(JSON.stringify(user_json)));

                var cmd_prtn_hist = prtJson.command_recv_history;
                cmd_prtn_hist.unshift({'userID': userID, 'username': user_json.name, 'docType':'private_message'});
                prtJson.command_recv_history = cmd_prtn_hist;
                await ctx.stub.putState(partnerID, Buffer.from(JSON.stringify(prtJson)));
            }
            else if(flag==1)
            {
                var cmd_hist_1= user_json.command_recv_history;
                user_json.command_recv_history = array_move(cmd_hist_1, index, 0);
                await ctx.stub.putState(userID, Buffer.from(JSON.stringify(user_json)));

                var cmd_prtn_hist_1 = prtJson.command_recv_history;
                var kk;
                for(let j in cmd_prtn_hist_1)
                {
                    if(cmd_prtn_hist_1[j]['userID']==userID)
                    {
                        kk=j;
                    }
                }
                prtJson.command_recv_history= array_move(cmd_prtn_hist_1, kk, 0);
                await ctx.stub.putState(partnerID, Buffer.from(JSON.stringify(prtJson)));
            }
        }
        else if(docType=='group_message')
        {
            var group_id = partnerID;
            //code 
        }
        
    }

    async queryHistoryMessage(ctx, userID){
        const userAsBytes = await ctx.stub.getState(userID);
        if(!userAsBytes || userAsBytes.length === 0)
        {
            throw new Error(`${userAsBytes} does not exist`);
        }
        var user = JSON.parse(userAsBytes.toString());
        var messageHistory = user.command_recv_history
        return JSON.stringify(messageHistory);
    }

    async createUser(ctx, userID, name, Phone, certification, position, dept, password) {
        console.info('============= START : Create User ===========');

        const user = {
            userID,
            docType: 'user',
            name,
            Phone,
            certification,
            position,
            password, 
            dept,
            command_recv_history:[]
        };
        const query_authen={
            "selector":{"userID":userID, "docType":"user"}
        };
        var result = await this.queryCustom(ctx, JSON.stringify(query_authen));
        if(JSON.parse(result.toString()).length>0)
        {
            return('user already register');
        }
        else if(JSON.parse(result.toString()).length==0)
        {
            //return(false);
            await ctx.stub.putState(userID, Buffer.from(JSON.stringify(user)));
            return('finish');
        }
        //await ctx.stub.putState(userID, Buffer.from(JSON.stringify(user)));
            //return('finish');
    }

    async createCar(ctx, carNumber, make, model, color, owner) {
        console.info('============= START : Create Car ===========');

        const car = {
            color,
            docType: 'car',
            make,
            model,
            owner,
        };

        await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
        console.info('============= END : Create Car ===========');
    }
    async savePrivateMessage(ctx, messID, sender, sender_name, receiver, content, timestamp)
    {
        var message = {
            messID,
            docType: 'private_message',
            sender,
            receiver,
            content,
            sender_name,
            timestamp
        }
        await ctx.stub.putState(messID, Buffer.from(JSON.stringify(message)));
        await this.updateCommandHistory(ctx, sender, receiver, 'private_message');
    }

    async saveGroupMessage(ctx, messID, room_id, sender, sender_name, content, timestamp)
    {
        var message = {
            messID,
            docType: 'group_message',
            room_id,
            sender,
            sender_name,
            content,
            timestamp,
        }
        await ctx.stub.putState(messID, Buffer.from(JSON.stringify(message)));
        console.log('saved group message');
    }

    async queryMessage(ctx,sender, receiver, docType, limit, skip)
    {
        if(docType=='private_message')
        {
            //code
            const query_private_message = {
                "selector":{
                    "$or":[
                        {"sender": sender, "receiver": receiver},
                        {"sender": receiver, "receiver": sender}
                    ],
                    "timestamp": {"$gt": null}
                },
                "sort":[{"timestamp":"desc"}],
                "limit": parseInt(limit),
                "skip": parseInt(skip),
                "use_index": ["_design/indexPrivMessDoc", "indexPrivMess"]
            }
            var result = await this.queryCustom(ctx, JSON.stringify(query_private_message));
            return(result);
        }
    }
    async queryCustom(ctx, queryString) {
		return await this.GetQueryResultForQueryString(ctx, queryString);
	}

    async GetQueryResultForQueryString(ctx, queryString) {

		let resultsIterator = await ctx.stub.getQueryResult(queryString);
		let results = await this._GetAllResults(resultsIterator, false);

		return JSON.stringify(results);
    }
    async _GetAllResults(iterator, isHistory) {
		let allResults = [];
		let res = await iterator.next();
		while (!res.done) {
			if (res.value && res.value.value.toString()) {
				let jsonRes = {};
				console.log(res.value.value.toString('utf8'));
				if (isHistory && isHistory === true) {
					jsonRes.TxId = res.value.txId;
					jsonRes.Timestamp = res.value.timestamp;
					try {
						jsonRes.Value = JSON.parse(res.value.value.toString('utf8'));
					} catch (err) {
						console.log(err);
						jsonRes.Value = res.value.value.toString('utf8');
					}
				} else {
					jsonRes.Key = res.value.key;
					try {
						jsonRes.Record = JSON.parse(res.value.value.toString('utf8'));
					} catch (err) {
						console.log(err);
						jsonRes.Record = res.value.value.toString('utf8');
					}
				}
				allResults.push(jsonRes);
			}
			res = await iterator.next();
		}
		iterator.close();
		return allResults;
	}

    async verifyMessBlockchain(ctx, messID, dateTime){
        try
        {
            const messBlock = await ctx.stub.getState(messID);
            const messBlock_json = JSON.parse(messBlock.toString());
            messBlock_json.verify_time = dateTime;
            if(messBlock_json.hasOwnProperty('verify_count'))
            {
                var count = parseInt(messBlock_json.verify_count);
                count++;
                messBlock_json.verify_count= count.toString();
            }
            else if(!messBlock_json.hasOwnProperty('verify_count'))
            {
                messBlock_json.verify_count="1";
            }
            await ctx.stub.putState(messID, Buffer.from(JSON.stringify(messBlock_json)));
            const messBlock_2 = await ctx.stub.getState(messID);
            return messBlock_2.toString();
        }
        catch(error)
        {
            return error;
        }
        
    }

    async queryAllData(ctx) {
        const startKey = '';
        const endKey = '';
        const allResults = [];
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        console.info(allResults);
        return JSON.stringify(allResults);
    }

    async changeUserPhone(ctx, userID, newPhone) {
        console.info('============= START : changeUserPhone ===========');

        const userAsBytes = await ctx.stub.getState(userID); // get the car from chaincode state
        if (!userAsBytes || userAsBytes.length === 0) {
            throw new Error(`${userNumber} does not exist`);
        }
        const user = JSON.parse(userAsBytes.toString());
        user.Phone = newPhone;

        await ctx.stub.putState(userID, Buffer.from(JSON.stringify(user)));
        console.info('============= END : changeUserPhone ===========');
    }

}

module.exports = FabCar;