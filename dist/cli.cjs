#!/usr/bin/env node
'use strict';var chunk7ALSDI3S_cjs=require('./chunk-7ALSDI3S.cjs'),i=require('path'),f=require('url'),citty=require('citty'),consola=require('consola');function _interopNamespace(e){if(e&&e.__esModule)return e;var n=Object.create(null);if(e){Object.keys(e).forEach(function(k){if(k!=='default'){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}})}n.default=e;return Object.freeze(n)}var i__namespace=/*#__PURE__*/_interopNamespace(i);var f__namespace=/*#__PURE__*/_interopNamespace(f);var o=new chunk7ALSDI3S_cjs.e({}),b=citty.defineCommand({meta:{name:"generate-templates",description:'Generate ".ejs" templates needed for generate api'},args:{"clean-output":{type:"boolean",description:"clean output folder before generate template. WARNING: May cause data loss",default:o.cleanOutput},debug:{type:"boolean",description:"additional information about processes inside this tool",default:o.debug},"http-client":{type:"string",description:`http client type (possible values: ${Object.values(chunk7ALSDI3S_cjs.b)})`,default:o.httpClientType},modular:{type:"boolean",description:"generate templates needed to separate files for http client, data contracts, and routes",default:o.modular},output:{type:"string",alias:"o",description:"output path of generated templates",default:o.output,required:true},rewrite:{type:"boolean",alias:"r",description:"rewrite content in existing templates",default:o.rewrite},silent:{type:"boolean",description:"Output only errors to console",default:o.silent}},run:async({args:e})=>{await chunk7ALSDI3S_cjs.f({cleanOutput:e["clean-output"],httpClientType:e["http-client"],modular:e.modular,output:e.output,rewrite:e.rewrite,silent:e.silent,debug:e.debug});}}),t=new chunk7ALSDI3S_cjs.d({}),h=citty.defineCommand({meta:{name:"generate",description:chunk7ALSDI3S_cjs.a.description},args:{"add-readonly":{type:"boolean",description:"generate readonly properties",default:t.addReadonly},"another-array-type":{type:"boolean",description:"generate array types as Array<Type> (by default Type[])",default:t.anotherArrayType},"api-class-name":{type:"string",description:"name of the api class",default:t.apiClassName},axios:{type:"boolean",description:"generate axios http client",default:false},"clean-output":{type:"boolean",description:"clean output folder before generate api. WARNING: May cause data loss",default:t.cleanOutput},client:{type:"boolean",description:"do not generate an API class",default:t.generateClient},"custom-config":{type:"string",description:"custom config: primitiveTypeConstructs, hooks, ... "},debug:{type:"boolean",description:"additional information about processes inside this tool",default:t.debug},"default-as-success":{type:"boolean",alias:"d",description:'use "default" response status code as success response too. some swagger schemas use "default" response status code as success response type by default.',default:t.defaultResponseAsSuccess},"default-response":{type:"string",description:"default type for empty response schema",default:t.defaultResponseType},"disable-throw-on-error":{type:"boolean",description:"Do not throw an error when response.ok is not true",default:t.disableThrowOnError},"enum-names-as-values":{type:"boolean",description:"use values in 'x-enumNames' as enum values (not only as keys)",default:t.enumNamesAsValues},"extract-enums":{type:"boolean",description:"extract all enums from inline interface/type content to typescript enum construction",default:t.extractEnums},"extract-request-body":{type:"boolean",description:"extract request body type to data contract",default:t.extractRequestBody},"extract-request-params":{type:"boolean",description:"extract request params to data contract (Also combine path params and query params into one object)",default:t.extractRequestParams},"extract-response-body":{type:"boolean",description:"extract response body type to data contract",default:t.extractResponseBody},"extract-response-error":{type:"boolean",description:"extract response error type to data contract",default:t.extractResponseError},"extract-responses":{type:"boolean",description:"extract all responses described in /components/responses",default:t.extractResponses},"generate-union-enums":{type:"boolean",description:'generate all "enum" types as union types (T1 | T2 | TN)',default:t.generateUnionEnums},"http-client":{type:"string",description:`http client type (possible values: ${Object.values(chunk7ALSDI3S_cjs.b)})`},js:{type:"boolean",description:"generate js api module with declaration file",default:t.toJS},modular:{type:"boolean",description:"generate separated files for http client, data contracts, and routes",default:t.modular},"module-name-first-tag":{type:"boolean",description:"splits routes based on the first tag",default:t.moduleNameFirstTag},"module-name-index":{type:"string",description:"determines which path index should be used for routes separation (example: GET:/fruits/getFruit -> index:0 -> moduleName -> fruits)",default:t.moduleNameIndex.toString()},name:{type:"string",alias:"n",description:"name of output typescript api file",default:t.fileName},output:{type:"string",alias:"o",description:"output path of typescript api file",default:"./"},patch:{type:"boolean",description:"fix up small errors in the swagger source definition",default:t.patch},path:{type:"string",alias:"p",description:"path/url to swagger scheme",required:true},responses:{type:"boolean",alias:"r",description:"generate additional information about request responses also add typings for bad responses",default:t.generateResponses},"route-types":{type:"boolean",description:"generate type definitions for API routes",default:t.generateRouteTypes},silent:{type:"boolean",description:"Output only errors to console",default:t.silent},"single-http-client":{type:"boolean",description:"Ability to send HttpClient instance to Api constructor",default:t.singleHttpClient},"sort-routes":{type:"boolean",description:"sort routes in alphabetical order",default:t.sortRoutes},"sort-types":{type:"boolean",description:"sort fields and types",default:t.sortTypes},templates:{type:"string",alias:"t",description:"path to folder containing templates"},"type-prefix":{type:"string",description:"data contract name prefix",default:t.typePrefix},"type-suffix":{type:"string",description:"data contract name suffix",default:t.typeSuffix},"unwrap-response-data":{type:"boolean",description:"unwrap the data item from the response",default:t.unwrapResponseData}},run:async({args:e})=>{let a;if(e["custom-config"])try{let r=f__namespace.pathToFileURL(i__namespace.resolve(process.cwd(),e["custom-config"])).toString();a=await import(r),a=a.default||a,a&&consola.consola.info(`Found custom config at: ${r}`);}catch(r){consola.consola.error("Error loading custom config:",r);}await chunk7ALSDI3S_cjs.g({addReadonly:e["add-readonly"],anotherArrayType:e["another-array-type"],apiClassName:e["api-class-name"],cleanOutput:e["clean-output"],debug:e.debug,defaultResponseAsSuccess:e["default-as-success"],defaultResponseType:e["default-response"],disableThrowOnError:e["disable-throw-on-error"],enumNamesAsValues:e["enum-names-as-values"],extractEnums:e["extract-enums"],extractRequestBody:e["extract-request-body"],extractRequestParams:e["extract-request-params"],extractResponseBody:e["extract-response-body"],extractResponseError:e["extract-response-error"],extractResponses:e["extract-responses"],fileName:e.name,generateClient:e.client,generateResponses:e.responses,generateRouteTypes:e["route-types"],generateUnionEnums:e["generate-union-enums"],httpClientType:e["http-client"]||e.axios?chunk7ALSDI3S_cjs.b.AXIOS:chunk7ALSDI3S_cjs.b.FETCH,input:i__namespace.resolve(process.cwd(),e.path),modular:e.modular,moduleNameFirstTag:e["module-name-first-tag"],moduleNameIndex:+e["module-name-index"]||0,output:i__namespace.resolve(process.cwd(),e.output||"."),patch:e.patch,silent:e.silent,singleHttpClient:e["single-http-client"],sortRoutes:e["sort-routes"],sortTypes:e["sort-types"],templates:e.templates,toJS:e.js,typePrefix:e["type-prefix"],typeSuffix:e["type-suffix"],unwrapResponseData:e["unwrap-response-data"],url:e.path,...a});}}),x=citty.defineCommand({meta:{name:chunk7ALSDI3S_cjs.a.name,description:chunk7ALSDI3S_cjs.a.description,version:chunk7ALSDI3S_cjs.a.version},subCommands:{generate:h,"generate-templates":b}});citty.runMain(x);//# sourceMappingURL=cli.cjs.map
//# sourceMappingURL=cli.cjs.map