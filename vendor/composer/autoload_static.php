<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit798fd7ca1c3f75a2daae6f428a5f4079
{
    public static $prefixLengthsPsr4 = array (
        'k' => 
        array (
            'kornrunner\\' => 11,
        ),
        'H' => 
        array (
            'Hathoriel\\Utils\\' => 16,
            'Hathoriel\\Tatum\\Test\\' => 21,
            'Hathoriel\\Tatum\\' => 16,
            'Hathoriel\\NftMaker\\' => 19,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'kornrunner\\' => 
        array (
            0 => __DIR__ . '/..' . '/kornrunner/keccak/src',
        ),
        'Hathoriel\\Utils\\' => 
        array (
            0 => __DIR__ . '/..' . '/tatum/utils/src',
        ),
        'Hathoriel\\Tatum\\Test\\' => 
        array (
            0 => __DIR__ . '/../..' . '/test/phpunit',
        ),
        'Hathoriel\\Tatum\\' => 
        array (
            0 => __DIR__ . '/../..' . '/inc',
            1 => __DIR__ . '/../..' . '/src/inc',
        ),
        'Hathoriel\\NftMaker\\' => 
        array (
            0 => __DIR__ . '/..' . '/tatum/nft-maker/src',
        ),
    );

    public static $classMap = array (
        'Hathoriel\\NftMaker\\Connectors\\DbConnector' => __DIR__ . '/..' . '/tatum/nft-maker/src/Connectors/DbConnector.php',
        'Hathoriel\\NftMaker\\Connectors\\IpfsConnector' => __DIR__ . '/..' . '/tatum/nft-maker/src/Connectors/IpfsConnector.php',
        'Hathoriel\\NftMaker\\Connectors\\TatumConnector' => __DIR__ . '/..' . '/tatum/nft-maker/src/Connectors/TatumConnector.php',
        'Hathoriel\\NftMaker\\Hooks\\AdminHooks' => __DIR__ . '/..' . '/tatum/nft-maker/src/Hooks/AdminHooks.php',
        'Hathoriel\\NftMaker\\Hooks\\PublicHooks' => __DIR__ . '/..' . '/tatum/nft-maker/src/Hooks/PublicHooks.php',
        'Hathoriel\\NftMaker\\Services\\EstimateService' => __DIR__ . '/..' . '/tatum/nft-maker/src/Services/EstimateService.php',
        'Hathoriel\\NftMaker\\Services\\MintService' => __DIR__ . '/..' . '/tatum/nft-maker/src/Services/MintService.php',
        'Hathoriel\\NftMaker\\Services\\SetupService' => __DIR__ . '/..' . '/tatum/nft-maker/src/Services/SetupService.php',
        'Hathoriel\\NftMaker\\Utils\\AddressValidator' => __DIR__ . '/..' . '/tatum/nft-maker/src/Utils/AddressValidator.php',
        'Hathoriel\\NftMaker\\Utils\\BlockchainLink' => __DIR__ . '/..' . '/tatum/nft-maker/src/Utils/BlockchainLink.php',
        'Hathoriel\\NftMaker\\Utils\\Chains' => __DIR__ . '/..' . '/tatum/nft-maker/src/Utils/Chains.php',
        'Hathoriel\\NftMaker\\Utils\\UtilsProvider' => __DIR__ . '/..' . '/tatum/nft-maker/src/Utils/UtilsProvider.php',
        'Hathoriel\\NftMaker\\Utils\\Utils\\Activator' => __DIR__ . '/..' . '/tatum/nft-maker/src/Utils/Utils/Activator.php',
        'Hathoriel\\NftMaker\\Utils\\Utils\\Assets' => __DIR__ . '/..' . '/tatum/nft-maker/src/Utils/Utils/Assets.php',
        'Hathoriel\\NftMaker\\Utils\\Utils\\Base' => __DIR__ . '/..' . '/tatum/nft-maker/src/Utils/Utils/Base.php',
        'Hathoriel\\NftMaker\\Utils\\Utils\\Core' => __DIR__ . '/..' . '/tatum/nft-maker/src/Utils/Utils/Core.php',
        'Hathoriel\\NftMaker\\Utils\\Utils\\Localization' => __DIR__ . '/..' . '/tatum/nft-maker/src/Utils/Utils/Localization.php',
        'Hathoriel\\NftMaker\\Utils\\Utils\\PackageLocalization' => __DIR__ . '/..' . '/tatum/nft-maker/src/Utils/Utils/PackageLocalization.php',
        'Hathoriel\\NftMaker\\Utils\\Utils\\PluginReceiver' => __DIR__ . '/..' . '/tatum/nft-maker/src/Utils/Utils/PluginReceiver.php',
        'Hathoriel\\NftMaker\\Utils\\Utils\\Service' => __DIR__ . '/..' . '/tatum/nft-maker/src/Utils/Utils/Service.php',
        'Hathoriel\\Tatum\\Activator' => __DIR__ . '/../..' . '/inc/Activator.php',
        'Hathoriel\\Tatum\\Assets' => __DIR__ . '/../..' . '/inc/Assets.php',
        'Hathoriel\\Tatum\\Core' => __DIR__ . '/../..' . '/inc/Core.php',
        'Hathoriel\\Tatum\\Localization' => __DIR__ . '/../..' . '/inc/Localization.php',
        'Hathoriel\\Tatum\\base\\Core' => __DIR__ . '/../..' . '/inc/base/Core.php',
        'Hathoriel\\Tatum\\base\\UtilsProvider' => __DIR__ . '/../..' . '/inc/base/UtilsProvider.php',
        'Hathoriel\\Tatum\\rest\\SetupRest' => __DIR__ . '/../..' . '/inc/rest/SetupRest.php',
        'Hathoriel\\Tatum\\view\\menu\\Page' => __DIR__ . '/../..' . '/inc/view/menu/Page.php',
        'Hathoriel\\Tatum\\view\\widget\\Widget' => __DIR__ . '/../..' . '/inc/view/widget/Widget.php',
        'Hathoriel\\Utils\\Activator' => __DIR__ . '/..' . '/tatum/utils/src/Activator.php',
        'Hathoriel\\Utils\\Assets' => __DIR__ . '/..' . '/tatum/utils/src/Assets.php',
        'Hathoriel\\Utils\\Base' => __DIR__ . '/..' . '/tatum/utils/src/Base.php',
        'Hathoriel\\Utils\\Core' => __DIR__ . '/..' . '/tatum/utils/src/Core.php',
        'Hathoriel\\Utils\\Localization' => __DIR__ . '/..' . '/tatum/utils/src/Localization.php',
        'Hathoriel\\Utils\\PackageLocalization' => __DIR__ . '/..' . '/tatum/utils/src/PackageLocalization.php',
        'Hathoriel\\Utils\\PluginReceiver' => __DIR__ . '/..' . '/tatum/utils/src/PluginReceiver.php',
        'Hathoriel\\Utils\\Service' => __DIR__ . '/..' . '/tatum/utils/src/Service.php',
        'kornrunner\\Keccak' => __DIR__ . '/..' . '/kornrunner/keccak/src/Keccak.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit798fd7ca1c3f75a2daae6f428a5f4079::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit798fd7ca1c3f75a2daae6f428a5f4079::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit798fd7ca1c3f75a2daae6f428a5f4079::$classMap;

        }, null, ClassLoader::class);
    }
}
