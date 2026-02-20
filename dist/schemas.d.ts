import { z } from 'zod';
export declare const OverridesSchema: z.ZodObject<{
    global: z.ZodOptional<z.ZodObject<{
        documentationUrl: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    }, "strict", z.ZodTypeAny, {
        documentationUrl?: string | undefined;
    }, {
        documentationUrl?: string | undefined;
    }>>;
    components: z.ZodOptional<z.ZodObject<{
        announcementCard: z.ZodOptional<z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            ctaText: z.ZodOptional<z.ZodString>;
            ctaUrl: z.ZodOptional<z.ZodString>;
            openInNewTab: z.ZodOptional<z.ZodBoolean>;
            className: z.ZodOptional<z.ZodString>;
            defaultLogo: z.ZodOptional<z.ZodBoolean>;
            disabled: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            className?: string | undefined;
            title?: string | undefined;
            disabled?: boolean | undefined;
            description?: string | undefined;
            ctaText?: string | undefined;
            ctaUrl?: string | undefined;
            openInNewTab?: boolean | undefined;
            defaultLogo?: boolean | undefined;
        }, {
            className?: string | undefined;
            title?: string | undefined;
            disabled?: boolean | undefined;
            description?: string | undefined;
            ctaText?: string | undefined;
            ctaUrl?: string | undefined;
            openInNewTab?: boolean | undefined;
            defaultLogo?: boolean | undefined;
        }>>;
        sidenavFooterMenu: z.ZodOptional<z.ZodObject<{
            email: z.ZodOptional<z.ZodString>;
            documentationUrl: z.ZodOptional<z.ZodString>;
            disableAccountLink: z.ZodOptional<z.ZodBoolean>;
            disableChangeFeedLink: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            email?: string | undefined;
            documentationUrl?: string | undefined;
            disableAccountLink?: boolean | undefined;
            disableChangeFeedLink?: boolean | undefined;
        }, {
            email?: string | undefined;
            documentationUrl?: string | undefined;
            disableAccountLink?: boolean | undefined;
            disableChangeFeedLink?: boolean | undefined;
        }>>;
        changeFeed: z.ZodOptional<z.ZodObject<{
            sourceData: z.ZodString;
            refetchInterval: z.ZodOptional<z.ZodNumber>;
            fallbackData: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                date: z.ZodString;
                title: z.ZodString;
                description: z.ZodString;
                tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                title: string;
                date: string;
                description: string;
                tags?: string[] | undefined;
            }, {
                id: string;
                title: string;
                date: string;
                description: string;
                tags?: string[] | undefined;
            }>, "many">>;
            onError: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
            showLoading: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            sourceData: string;
            onError?: ((...args: unknown[]) => unknown) | undefined;
            refetchInterval?: number | undefined;
            fallbackData?: {
                id: string;
                title: string;
                date: string;
                description: string;
                tags?: string[] | undefined;
            }[] | undefined;
            showLoading?: boolean | undefined;
        }, {
            sourceData: string;
            onError?: ((...args: unknown[]) => unknown) | undefined;
            refetchInterval?: number | undefined;
            fallbackData?: {
                id: string;
                title: string;
                date: string;
                description: string;
                tags?: string[] | undefined;
            }[] | undefined;
            showLoading?: boolean | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        announcementCard?: {
            className?: string | undefined;
            title?: string | undefined;
            disabled?: boolean | undefined;
            description?: string | undefined;
            ctaText?: string | undefined;
            ctaUrl?: string | undefined;
            openInNewTab?: boolean | undefined;
            defaultLogo?: boolean | undefined;
        } | undefined;
        sidenavFooterMenu?: {
            email?: string | undefined;
            documentationUrl?: string | undefined;
            disableAccountLink?: boolean | undefined;
            disableChangeFeedLink?: boolean | undefined;
        } | undefined;
        changeFeed?: {
            sourceData: string;
            onError?: ((...args: unknown[]) => unknown) | undefined;
            refetchInterval?: number | undefined;
            fallbackData?: {
                id: string;
                title: string;
                date: string;
                description: string;
                tags?: string[] | undefined;
            }[] | undefined;
            showLoading?: boolean | undefined;
        } | undefined;
    }, {
        announcementCard?: {
            className?: string | undefined;
            title?: string | undefined;
            disabled?: boolean | undefined;
            description?: string | undefined;
            ctaText?: string | undefined;
            ctaUrl?: string | undefined;
            openInNewTab?: boolean | undefined;
            defaultLogo?: boolean | undefined;
        } | undefined;
        sidenavFooterMenu?: {
            email?: string | undefined;
            documentationUrl?: string | undefined;
            disableAccountLink?: boolean | undefined;
            disableChangeFeedLink?: boolean | undefined;
        } | undefined;
        changeFeed?: {
            sourceData: string;
            onError?: ((...args: unknown[]) => unknown) | undefined;
            refetchInterval?: number | undefined;
            fallbackData?: {
                id: string;
                title: string;
                date: string;
                description: string;
                tags?: string[] | undefined;
            }[] | undefined;
            showLoading?: boolean | undefined;
        } | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    components?: {
        announcementCard?: {
            className?: string | undefined;
            title?: string | undefined;
            disabled?: boolean | undefined;
            description?: string | undefined;
            ctaText?: string | undefined;
            ctaUrl?: string | undefined;
            openInNewTab?: boolean | undefined;
            defaultLogo?: boolean | undefined;
        } | undefined;
        sidenavFooterMenu?: {
            email?: string | undefined;
            documentationUrl?: string | undefined;
            disableAccountLink?: boolean | undefined;
            disableChangeFeedLink?: boolean | undefined;
        } | undefined;
        changeFeed?: {
            sourceData: string;
            onError?: ((...args: unknown[]) => unknown) | undefined;
            refetchInterval?: number | undefined;
            fallbackData?: {
                id: string;
                title: string;
                date: string;
                description: string;
                tags?: string[] | undefined;
            }[] | undefined;
            showLoading?: boolean | undefined;
        } | undefined;
    } | undefined;
    global?: {
        documentationUrl?: string | undefined;
    } | undefined;
}, {
    components?: {
        announcementCard?: {
            className?: string | undefined;
            title?: string | undefined;
            disabled?: boolean | undefined;
            description?: string | undefined;
            ctaText?: string | undefined;
            ctaUrl?: string | undefined;
            openInNewTab?: boolean | undefined;
            defaultLogo?: boolean | undefined;
        } | undefined;
        sidenavFooterMenu?: {
            email?: string | undefined;
            documentationUrl?: string | undefined;
            disableAccountLink?: boolean | undefined;
            disableChangeFeedLink?: boolean | undefined;
        } | undefined;
        changeFeed?: {
            sourceData: string;
            onError?: ((...args: unknown[]) => unknown) | undefined;
            refetchInterval?: number | undefined;
            fallbackData?: {
                id: string;
                title: string;
                date: string;
                description: string;
                tags?: string[] | undefined;
            }[] | undefined;
            showLoading?: boolean | undefined;
        } | undefined;
    } | undefined;
    global?: {
        documentationUrl?: string | undefined;
    } | undefined;
}>;
export type Overrides = z.infer<typeof OverridesSchema>;
export declare function validateOverrides(data: unknown): {
    valid: Overrides;
    errors: Array<{
        key: string;
        message: string;
    }>;
};
//# sourceMappingURL=schemas.d.ts.map