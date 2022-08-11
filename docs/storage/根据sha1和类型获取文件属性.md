# 根据sha1和类型获取文件属性



### 调用方式: GET



### 接口地址1:

```
https://api.freelog.com/v2/storages/files/{sha1}/info
```



### 传入参数说明:

| 参数 | 必选 | 类型及范围 | 说明 |
| :--- | :--- | :--- | :--- |
| sha1 | 必选 | string | 文件的sha1值 |



### 返回说明：

| 返回值字段 | 字段类型 | 字段说明 |
| :--- | :--- | :--- |
| sha1 | string | 文件hash值-sha1算法 |
| fileSize | int | 文件大小 |
| metaAnalyzeStatus | int | 文件属性分析状态 0:未解析 1:解析中 2:解析成功 3:解析失败 |
| metaInfo | object | 文件meta信息 |



### 示例

```json
{
	"ret": 0,
	"errCode": 0,
	"errcode": 0,
	"msg": "success",
	"data": {
		"sha1": "ccebd981ecb2985aa143aa16ac4393de35022bd1",
		"fileSize": 2082,
		"metaInfo": {
			"fileSize": 2082,
			"mime": "image/jpeg",
			"enWordCount": 457,
			"mimeType": "text/markdown",
			"zhWordCount": 80
		},
		"metaAnalyzeStatus": 2
	}
}
```





### 接口地址2:

```
https://api.freelog.com/v2/storages/files/list/info
```



### 传入参数说明:

| 参数 | 必选 | 类型及范围 | 说明                        |
| :--- | :--- | :--------- | :-------------------------- |
| sha1 | 必选 | string     | 文件的sha1值,多个用逗号分隔 |



### 返回说明：

| 返回值字段        | 字段类型 | 字段说明                                                 |
| :---------------- | :------- | :------------------------------------------------------- |
| sha1              | string   | 文件hash值-sha1算法                                      |
| fileSize          | int      | 文件大小                                                 |
| metaAnalyzeStatus | int      | 文件属性分析状态 0:未解析 1:解析中 2:解析成功 3:解析失败 |
| metaInfo          | object   | 文件meta信息                                             |



### 示例

```json
{
	"ret": 0,
	"errCode": 0,
	"errcode": 0,
	"msg": "success",
	"data": [{
		"sha1": "c3104c707e474ae87d908d0f1ecb78526f6284cb",
		"fileSize": 6896,
		"metaInfo": {
			"fileSize": 6896,
			"mime": "text/css"
		},
		"metaAnalyzeStatus": 2
	}, {
		"sha1": "c3104c707e474ae87d908d0f1ecb78526f6284ca"
	}]
}
```



